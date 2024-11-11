import { K0Model1, K0Model2, K0Model3, K0Model4 } from "../../../lib/lokaty";

describe("Test model #1", () => {
  const model1 = new K0Model1();

  it("Should calculate the correct K0 value", () => {
    const params = {
      Kn: 2960,
      n: 2,
      r: 0.24,
    };
    const result = model1.calculate(params);
    expect(result).toBe(2000);
  });
});

describe("Test model #2", () => {
  const model2 = new K0Model2();

  it("Should calculate the correct K0 value", () => {
    const params = {
      Kn: 3075.2,
      n: 2,
      r: 0.24,
    };
    const result = model2.calculate(params);
    expect(result).toBe(2000);
  });
});

describe("Test model #3", () => {
  const model3 = new K0Model3();

  it("Should calculate the correct K0 value", () => {
    const params = {
      Kn: 3187.7,
      n: 2,
      r: 0.24,
      m: 4,
    };
    const result = model3.calculate(params);
    expect(result).toBe(2000);
  });

  it("Should calculate the correct K0 value", () => {
    const params = {
      Kn: 3216.87,
      n: 2,
      r: 0.24,
      m: 12,
    };
    const result = model3.calculate(params);
    expect(result).toBe(2000);
  });
});

describe("Test model #4", () => {
  const model4 = new K0Model4();

  it("Should calculate the correct K0 value", () => {
    const params = {
      Kn: 3232.15,
      n: 2,
      r: 0.24,
    };
    const result = model4.calculate(params);
    expect(result).toBe(2000);
  });
});
