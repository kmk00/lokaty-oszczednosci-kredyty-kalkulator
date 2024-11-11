import { RModel1, RModel2, RModel3, RModel4 } from "../../../lib/lokaty2";

describe("Test model #1", () => {
  const model1 = new RModel1();

  it("Should calculate the correct R value", () => {
    const params = {
      K0: 2000,
      n: 2,
      Kn: 2960,
    };
    const result = model1.calculate(params);
    expect(result).toBe(24);
  });
});

describe("Test model #2", () => {
  const model2 = new RModel2();

  it("Should calculate the correct R value", () => {
    const params = {
      K0: 2000,
      n: 2,
      Kn: 3075.2,
    };
    const result = model2.calculate(params);
    expect(result).toBe(24);
  });
});

describe("Test model #3", () => {
  const model3 = new RModel3();

  it("Should calculate the correct R value", () => {
    const params = {
      K0: 2000,
      n: 2,
      Kn: 3187.7,
      m: 4,
    };
    const result = model3.calculate(params);
    expect(result).toBe(24);
  });

  it("Should calculate the correct R value", () => {
    const params = {
      K0: 2000,
      n: 2,
      Kn: 3216.87,
      m: 12,
    };
    const result = model3.calculate(params);
    expect(result).toBe(24);
  });
});

describe("Test model #4", () => {
  const model4 = new RModel4();

  it("Should calculate the correct R value", () => {
    const params = {
      K0: 2000,
      n: 2,
      Kn: 3232.15,
    };
    const result = model4.calculate(params);
    expect(result).toBe(24);
  });
});
