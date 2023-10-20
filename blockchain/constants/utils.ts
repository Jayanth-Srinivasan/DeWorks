import { ethers } from "ethers";
import ABI, { contractAddress } from "./usersABI";

const rpcUrl =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(
  process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!,
  provider
);

export default provider;

async function checkUserExists(address: string) {
  try {
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    const userExists = await contract.userExists(address);

    if (userExists[0]) {
      console.log(
        `User with address ${userExists[1]} exists as a ${userExists[2]}`
      );

      if (userExists[2] === "client") return "client";
      else return "freelancer";
    } else {
      console.log(`User with address ${userExists[1]} does not exist.`);
      return "not-found";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addClientData(
  yourName: string,
  CompanyName: string,
  description: string,
  walletAddress: string,
  email: string
) {
  try {
    const contract = new ethers.Contract(contractAddress, ABI, wallet);

    // Send the transaction to add client data
    const transaction = await contract.addOrUpdateClientData(
      yourName,
      CompanyName,
      description,
      email,
      walletAddress
    );

    await transaction.wait();

    console.log("Client data added successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

export { checkUserExists, addClientData };
