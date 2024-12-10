import {
  EModel1Down,
  EModel1Up,
  EModel2Up,
  EModel2Down,
  EModel3Up,
  EModel3Down,
  EModel4Up,
  EModel4Down,
} from "../../../lib/oszczednosci";

describe("Test model #1", () => {
  it("Should calculate the correct E value from up", () => {
    const data = {
      Kn: 5.11,
      r: 0.1,
      n: 4,
    };
    const model = new EModel1Up();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
  it("Should calculate the correct E value from down", () => {
    const data = {
      Kn: 4.64,
      r: 0.1,
      n: 4,
    };
    const model = new EModel1Down();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
});

describe("Test model #2", () => {
  it("Should calculate the correct E value from up", () => {
    const data = {
      Kn: 2.32,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new EModel2Up();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
  it("Should calculate the correct E value from down", () => {
    const data = {
      Kn: 2.1,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new EModel2Down();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
});

describe("Test model #3", () => {
  it("Should calculate the correct E value from up", () => {
    const data = {
      Kn: 6.74,
      r: 0.1,
      n: 2,
      m: 3,
    };

    const model = new EModel3Up();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
  it("Should calculate the correct E value from down", () => {
    const data = {
      Kn: 6.52,
      r: 0.1,
      n: 2,
      m: 3,
    };

    const model = new EModel3Down();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
});

describe("Test model #4", () => {
  it("Should calculate the correct E value from up", () => {
    const data = {
      Kn: 6.72,
      r: 0.1,
      n: 2,
      m: 3,
    };

    const model = new EModel4Up();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
  it("Should calculate the correct E value from down", () => {
    const data = {
      Kn: 6.51,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new EModel4Down();

    const result = model.calculate(data);

    expect(result).toBe(1);
  });
});
