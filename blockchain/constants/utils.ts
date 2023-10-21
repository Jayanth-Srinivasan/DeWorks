import { ethers } from "ethers";
import ABI, { contractAddress } from "./usersABI";

const rpcUrl =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(
  process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!,
  provider
);
const contract = new ethers.Contract(contractAddress, ABI, wallet);
export default provider;

async function checkUserExists(address: string) {
  try {
    const userExists = await contract.userExists(address);
    console.log(userExists);

    if (userExists[0]) {
      console.log(
        `User with address ${userExists[1]} exists as a ${userExists[2]}`
      );

      if (userExists[1] === "client") return "client";
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
  walletAddress: string
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
async function addFreelancerData(
  name: string,
  email: string,
  category: string,
  skills: string,
  experience: string,
  walletAddress: string
) {
  try {
    const contract = new ethers.Contract(contractAddress, ABI, wallet);
    const transaction = await contract.addOrUpdateFreelancerData(
      name,
      email,
      walletAddress,
      category,
      experience,
      skills
    );
    await transaction.wait();
    console.log("Client data added successfully.");
    return Promise.resolve();
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject();
  }
}

const postJob = async (
  title: string,
  location: string,
  category: string,
  payInMATIC: number,
  experience: string,
  description: string
) => {
  try {
    const valueInWei = ethers.parseEther(payInMATIC.toString());

    const tx = await contract.postJob(
      title,
      location,
      category,
      valueInWei,
      experience,
      description,
      {
        value: valueInWei,
      }
    );

    await tx.wait();
    console.log("Job posted successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};

async function requestJob(jobId: number) {
  try {
    const tx = await contract.requestJob(jobId);
    await tx.wait();
    console.log("Job requested successfully!");
  } catch (error) {
    console.error("Error requesting job: " + error);
  }
}

async function acceptJobRequest(jobId: string) {
  try {
    const tx = await contract.acceptJobRequest(jobId);
    await tx.wait();
    console.log("Job request accepted successfully!");
  } catch (error) {
    console.error("Error accepting job request: " + error);
  }
}

async function completeJob(jobId: number) {
  try {
    const tx = await contract.completeJob(jobId);
    await tx.wait();
    console.log("Job completed successfully!");
  } catch (error) {
    console.error("Error completing job: " + error);
  }
}

export {
  checkUserExists,
  addClientData,
  addFreelancerData,
  postJob,
  requestJob,
  acceptJobRequest,
  completeJob,
};
