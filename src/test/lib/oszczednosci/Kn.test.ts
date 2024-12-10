import {
  KnModel1Down,
  KnModel1Up,
  KnModel2Up,
  KnModel2Down,
  KnModel3Up,
  KnModel3Down,
  KnModel4Up,
  KnModel4Down,
} from "../../../lib/oszczednosci";

describe("Test model #1", () => {
  it("Should calculate the correct Kn value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 4,
    };
    const model = new KnModel1Up();

    const result = model.calculate(data);

    expect(result).toBe(5.11);
  });
  it("Should calculate the correct Kn value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 4,
    };
    const model = new KnModel1Down();

    const result = model.calculate(data);

    expect(result).toBe(4.64);
  });
});

describe("Test model #2", () => {
  it("Should calculate the correct Kn value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new KnModel2Up();

    const result = model.calculate(data);

    expect(result).toBe(2.32);
  });
  it("Should calculate the correct Kn value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new KnModel2Down();

    const result = model.calculate(data);

    expect(result).toBe(2.1);
  });
});

describe("Test model #3", () => {
  it("Should calculate the correct Kn value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new KnModel3Up();

    const result = model.calculate(data);

    expect(result).toBe(6.74);
  });
  it("Should calculate the correct Kn value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };
    const model = new KnModel3Down();

    const result = model.calculate(data);

    expect(result).toBe(6.52);
  });
});

describe("Test model #4", () => {
  // Sprawdzic ten wyjatek
  it("Should calculate the correct Kn value from up", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };

    const model = new KnModel4Up();

    const answer = model.calculate(data);

    expect(answer).toBe(6.72);
  });

  it("Should calculate the correct Kn value from down", () => {
    const data = {
      E: 1,
      r: 0.1,
      n: 2,
      m: 3,
    };

    const model = new KnModel4Down();

    const answer = model.calculate(data);

    expect(answer).toBe(6.51);
  });
});
