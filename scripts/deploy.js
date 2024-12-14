const hre = require("hardhat");

async function main() {
  try {
    const MyContract = await hre.ethers.getContractFactory("MyContract");

    console.log("Deploying the contract...");

    // Deploy the contract
    const myContract = await MyContract.deploy();

    // Wait for the deployment transaction to be mined
    const deploymentReceipt = await myContract.waitForDeployment();

    console.log("Contract deployed to address:", deploymentReceipt.target);
  } catch (error) {
    console.error("Error deploying the contract:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
