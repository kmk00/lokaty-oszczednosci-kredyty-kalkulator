import {
  NModel1Down,
  NModel1Up,
  NModel2Up,
  NModel2Down,
  NModel3Up,
  NModel3Down,
  NModel4Up,
  NModel4Down,
} from "../../../lib/oszczednosci";

describe("Test model #1", () => {
  it("Should calculate the correct N value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      Kn: 5.11,
    };
    const model = new NModel1Up();

    const result = model.calculate(data);

    expect(result).toBe(4);
  });
  it("Should calculate the correct N value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      Kn: 4.64,
    };
    const model = new NModel1Down();

    const result = model.calculate(data);

    expect(result).toBe(4);
  });
});

describe("Test model #2", () => {
  it("Should calculate the correct N value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 2.32,
    };
    const model = new NModel2Up();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
  it("Should calculate the correct N value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 2.1,
    };
    const model = new NModel2Down();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
});

describe("Test model #3", () => {
  it("Should calculate the correct N value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 6.74,
    };
    const model = new NModel3Up();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
  it("Should calculate the correct N value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 6.52,
    };
    const model = new NModel3Down();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
});

describe("Test model #4", () => {
  it("Should calculate the correct N value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 6.72,
    };
    const model = new NModel4Up();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
  it("Should calculate the correct N value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      m: 3,
      Kn: 6.51,
    };
    const model = new NModel4Down();

    const result = model.calculate(data);

    expect(result).toBe(2);
  });
});
