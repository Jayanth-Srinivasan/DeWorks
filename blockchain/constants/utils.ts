import { ethers } from "ethers";
import ABI, { contractAddress } from "./usersABI";

const rpcUrl =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!, provider);
export default provider;

async function checkUserExists(address: string) {
  try {
    console.log(address)
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
  companyName: string,
  description: string,
  email: string,
  walletAddress: string,
) {
  try {
    const contract = new ethers.Contract(contractAddress, ABI, wallet);
    const transaction = await contract.addOrUpdateClientData(
      yourName,
      companyName,
      description,
      email,
      walletAddress
    );
    await transaction.wait();
    console.log("Client data added successfully.");
    return Promise.resolve();
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject();
  }
}

export { checkUserExists, addClientData };
