const { expect } = require("chai");

describe("Calculator", function () {
  it("should calculate each method", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy("Hello, calculator!");

    await calculator.deployed();
    expect(await calculator.add(10, 5));
  });
});
