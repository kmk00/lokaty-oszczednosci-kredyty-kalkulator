import {} from "../../../lib/lokaty";
import {
  OszczednosciCalculator,
  OszczednosciParamsBuilder,
} from "../../../lib/oszczednosci";

describe("Test correct model determination", () => {
  it("should determine correct model 1", () => {
    const option = "Kn";
    const data = {
      Kn: 1,
      n: 1,
      r: 1,
      capitalization: 1,
      rRate: 1,
      EFrequency: 1,
      E: 1,
      from: "down" as "up" | "down",
    };

    const calculator = new OszczednosciCalculator(option);

    expect(calculator.determineModel(data)).toBe(1);
  });

  it("should not determine correct model 1", () => {
    const option = "Kn";
    const data = {
      Kn: 1,
      n: 1,
      r: 1,
      capitalization: 2,
      rRate: 2,
      EFrequency: 1,
      E: 1,
      from: "down" as "up" | "down",
    };

    const calculator = new OszczednosciCalculator(option);

    expect(calculator.determineModel(data)).not.toBe(1);
  });
});

describe("Test correct model calculation", () => {
  it("Should calculate correct m value when exception in model 4", () => {
    const data = {
      capitalization: 3,
      rRate: 3,
      EFrequency: 1,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(12);
  });

  it("Should calculate correct m value - 1", () => {
    const data = {
      capitalization: 2,
      rRate: 3,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(2);
  });

  it("Should calculate correct m value - 2", () => {
    const data = {
      capitalization: 1,
      rRate: 3,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(4);
  });

  it("Should calculate correct m value - 3", () => {
    const data = {
      capitalization: 0,
      rRate: 3,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(12);
  });

  it("Should calculate correct m value - 4", () => {
    const data = {
      capitalization: 1,
      rRate: 2,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(2);
  });

  it("Should calculate correct m value - 5", () => {
    const data = {
      capitalization: 0,
      rRate: 2,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(6);
  });

  it("Should calculate correct m value - 6", () => {
    const data = {
      capitalization: 0,
      rRate: 1,
      EFrequency: 3,
    };

    const calculator = new OszczednosciParamsBuilder();
    const m = calculator
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .build().m;

    expect(m).toBe(3);
  });
});
