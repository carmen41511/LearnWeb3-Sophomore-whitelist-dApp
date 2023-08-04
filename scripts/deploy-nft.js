const hre = require("hardhat");

const contractAddress = "0x41748dE152fa6F3B169f1B0E51026537A875F384";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const nftContract = await hre.ethers.deployContract("CryptoDevs", [contractAddress]);

  await nftContract.waitForDeployment();

  console.log("NFT Contract Address:", nftContract.target);

  await sleep(50 * 1000); 

  await hre.run("verify:verify", {
    address: nftContract.target,
    constructorArguments: [contractAddress],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });