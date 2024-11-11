import { KnModel1, KnModel2, KnModel3, KnModel4 } from "../../../lib/lokaty";

describe("Test model #1", () => {
  const model1 = new KnModel1();

  it("Should calculate the correct Kn value", () => {
    const params = {
      K0: 2000,
      n: 2,
      r: 0.24,
    };
    const result = model1.calculate(params);
    expect(result).toBe(2960);
  });
});

describe("Test model #2", () => {
  const model2 = new KnModel2();

  it("Should calculate the correct Kn value", () => {
    const params = {
      K0: 2000,
      n: 2,
      r: 0.24,
    };
    const result = model2.calculate(params);
    expect(result).toBe(3075.2);
  });
});

describe("Test model #3", () => {
  const model3 = new KnModel3();

  it("Should calculate the correct Kn value", () => {
    const params = {
      K0: 2000,
      n: 2,
      r: 0.24,
      m: 4,
    };
    const result = model3.calculate(params);
    expect(result).toBe(3187.7);
  });

  it("Should calculate the correct Kn value", () => {
    const params = {
      K0: 2000,
      n: 2,
      r: 0.24,
      m: 12,
    };
    const result = model3.calculate(params);
    expect(result).toBe(3216.87);
  });
});

describe("Test model #4", () => {
  const model4 = new KnModel4();

  it("Should calculate the correct Kn value", () => {
    const params = {
      K0: 2000,
      n: 2,
      r: 0.24,
    };
    const result = model4.calculate(params);
    expect(result).toBe(3232.15);
  });
});
