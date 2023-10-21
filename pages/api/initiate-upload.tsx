// Import the necessary modules from the @spheron/browser-upload package
import ApiError from "@/lib/apiError";
import { SpheronClient, ProtocolEnum } from "@spheron/storage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      await initiateUpload(req, res);
      break;
    }
  }
}

// Set up an endpoint on the server to fetch the uploadToken
const initiateUpload = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const bucketName = "deworks";
    const protocol = ProtocolEnum.IPFS; // desired protocol
    const token = process.env.SPHERON_TOKEN ?? '';

    // Create a new SpheronClient instance with the access token
    const client = new SpheronClient({ token });

    // Generate the uploadToken using createSingleUploadToken method
    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });

    // Respond with the uploadToken in JSON format
    res.status(200).json({
      uploadToken,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ApiError) {
      return res
        .status(error.statusCode)
        .json({ data: error.data, message: error.message });
    }
    return res.status(500).json({ message: "app/internal-server-error" });
  }
};
