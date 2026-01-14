import { ethers } from "hardhat";
async function main() {
  const [deployer] = await ethers.getSigners();
  const erc20 = await ethers.getContractFactory("BlackbaudERC20");
  const token = await erc20.deploy("Blackbaud Token", "BBT");
  await token.waitForDeployment();
  console.log("ERC20 deployed to:", await token.getAddress());
}
main().catch(console.error);
