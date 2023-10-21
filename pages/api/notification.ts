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
		const { receiverAddress, title, body } = req.body;
		const rpcUrl =
			'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78';
		// const rpcUrl = process.env.INFURA_RPC_URL;
		const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
		// const wallet = ethers.Wallet.fromMnemonic(process.env.SECRET_PHRASE!);
		const wallet = new ethers.Wallet(
			process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!,
			provider
		);
		const signer = wallet.connect(provider);
		const userAlice = await PushAPI.initialize(
			signer as unknown as SignerType,
			{ env: ENV.STAGING }
		);
		const response = await userAlice.notification.subscribe(
			`eip155:5:${'0x69e0B652349429866C734aF8d96853F491DA2632'}`
		);
		console.log({ response: response });
		await userAlice.channel.send(
			['0x458ca752F71a00B78bd80C9553EC38B6cD366B0d'],
			{
				notification: {
					title: 'Hello pd',
					body: 'Are you ready for this?',
				},
				// payload: {
				// 	meta: {
				// 		type: '0+1',
				// 		data: '0x458ca752F71a00B78bd80C9553EC38B6cD366B0d',
				// 	},
				// },
			}
		);

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
