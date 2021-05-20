const { expect } = require("chai");

describe("Calculator", function () {
  it("Should calculate the right result : addition", async function () {
    const result = await calculator.add(10, 10);
    expect(result).to.equal(20);
  });

  it("Should calculate the right result : substraction", async function () {
    const result = await calculator.sub(10, 5);
    expect(result).to.equal(5);
  });
});
