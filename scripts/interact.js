const hre = require("hardhat");
const { ethers } = require("ethers");
// require("dotenv").config(); // Ensure PRIVATE_KEY is loaded from the environment

async function main() {
  try {
    const MyContractAddress = "0x700b6a60ce7eaaea56f065753d8dcb9653dbad35";

    console.log("Contract address:", MyContractAddress);

    // Load ABI
    const MyContractABI =
      require("../artifacts/contracts/MyContract.sol/MyContract.json").abi;

    // Get the provider
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

    // Get the signer using the private key
    const signer = new ethers.Wallet(
      "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
      provider
    );

    console.log("Signer address:", await signer.getAddress());

    // Create the contract instance with a signer
    const contract = new ethers.Contract(
      MyContractAddress,
      MyContractABI,
      signer
    );

    // Call the contract function
    const result = await contract.helloWorld();
    console.log("Contract response:", result);
  } catch (err) {
    console.error("Failed to interact with the contract:", err);
  }
}

main();
