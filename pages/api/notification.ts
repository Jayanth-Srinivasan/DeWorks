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
		const receiverAddress = req.body.receiverAddress;
		const rpcUrl = process.env.INFURA_RPC_URL;
		const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
		const wallet = ethers.Wallet.fromMnemonic(process.env.SECRET_PHRASE!);
		const signer = wallet.connect(provider);
		const userAlice = await PushAPI.initialize(
			signer as unknown as SignerType,
			{ env: ENV.STAGING }
		);
		await userAlice.channel.send([receiverAddress], {
			notification: {
				title: 'Hello pd',
				body: 'Are you ready for this?',
			},
		});
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
