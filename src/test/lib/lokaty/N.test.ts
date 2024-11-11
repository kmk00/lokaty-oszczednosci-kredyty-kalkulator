import { NModel1, NModel2, NModel3, NModel4 } from "../../../lib/lokaty";

describe("Test model #1", () => {
  const model1 = new NModel1();

  it("Should calculate the correct N value", () => {
    const params = {
      K0: 2000,
      Kn: 2960,
      r: 0.24,
    };
    const result = model1.calculate(params);
    expect(result).toBe(2);
  });
});

describe("Test model #2", () => {
  const model2 = new NModel2();

  it("Should calculate the correct N value", () => {
    const params = {
      K0: 2000,
      Kn: 3075.2,
      r: 0.24,
    };
    const result = model2.calculate(params);
    expect(result).toBe(2);
  });
});

describe("Test model #3", () => {
  const model3 = new NModel3();

  it("Should calculate the correct N value", () => {
    const params = {
      K0: 2000,
      Kn: 3187.7,
      r: 0.24,
      m: 4,
    };
    const result = model3.calculate(params);
    expect(result).toBe(2);
  });

  it("Should calculate the correct N value", () => {
    const params = {
      K0: 2000,
      Kn: 3216.87,
      r: 0.24,
      m: 12,
    };
    const result = model3.calculate(params);
    expect(result).toBe(2);
  });
});

describe("Test model #4", () => {
  const model4 = new NModel4();

  it("Should calculate the correct N value", () => {
    const params = {
      K0: 2000,
      Kn: 3232.15,
      r: 0.24,
    };
    const result = model4.calculate(params);
    expect(result).toBe(2);
  });
});
