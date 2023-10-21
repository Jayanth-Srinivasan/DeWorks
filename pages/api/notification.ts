import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import { PushAPI, SignerType } from '@pushprotocol/restapi';
import { ENV } from '@pushprotocol/restapi/src/lib/constants';
import ApiError from '../../lib/apiError';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'POST': {
			await sendNotification(req, res);
			break;
		}
	}
}

const sendNotification = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { senderAddress, receiverAddress, title, body } = req.body;
		const rpcUrl = process.env.INFURA_RPC_URL;
		const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
		const wallet = ethers.Wallet.fromMnemonic(process.env.SECRET_PHRASE!);
		// const wallet = new ethers.Wallet(
		// 	process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!,
		// 	provider
		// );
		const signer = wallet.connect(provider);
		const userAlice = await PushAPI.initialize(
			signer as unknown as SignerType,
			{ env: ENV.STAGING }
		);
		// const response = await userAlice.notification.subscribe(
		// 	`eip155:5:${'0xf5B5028f34DC110EBF04d0aE9e5dA07f086eF77e'}`
		// );
		// console.log({ response: response });

		await userAlice.channel.send(['*'], {
			notification: {
				title,
				body,
			},
			payload: {
				// FROM - TO
				embed: `${senderAddress} - ${receiverAddress}`,
			},
		});

		// const inboxNotifications = await userAlice.notification.list('INBOX');
		// console.log(inboxNotifications);

		return res.status(201).json({ message: 'notification/sent' });
	} catch (error) {
		console.log(error);
		if (error instanceof ApiError) {
			return res
				.status(error.statusCode)
				.json({ data: error.data, message: error.message });
		}
		return res.status(500).json({ message: 'app/internal-server-error' });
	}
};
