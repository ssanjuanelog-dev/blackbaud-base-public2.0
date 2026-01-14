import { expect } from "chai";
import { ethers } from "hardhat";
describe("BlackbaudERC20", () => {
  it("mints tokens", async () => {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("BlackbaudERC20");
    const token = await Token.deploy("Test", "TST");
    await token.mint(owner.address, 100);
    expect(await token.balanceOf(owner.address)).to.equal(100);
  });
});
