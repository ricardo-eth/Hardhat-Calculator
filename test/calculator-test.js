const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let calculator;

  this.beforeEach(async () => {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  it("should return the addition of both parameters", async function () {
    expect(await calculator.add(10, 5)).to.equal(15); // Pass
  });

  it("should return the substraction of both parameters", async function () {
    expect(await calculator.sub(5, 5)).to.equal(3); // Fail should be 0
  });

  it("should return the multiplication of both parameters", async function () {
    expect(await calculator.mul(2, 5)).to.equal(10); // Pass
  });

  it("should return the division of both parameters", async function () {
    expect(await calculator.div(30, 15)).to.equal(5); // Fail should be 2
  });

  it("should return the modulo of both parameters", async function () {
    expect(await calculator.mod(10, 60)).to.equal(4); // Fail should be 10
  });
});
