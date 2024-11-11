import { LokatyParamsBuilder } from "../../../lib/lokaty";

describe("Test lokaty params builder", () => {
  it("should build params", () => {
    const params = new LokatyParamsBuilder()
      .setK0(10)
      .setKn(20)
      .setN(2)
      .setR(5)
      .build();
    expect(params.K0).toBe(10);
    expect(params.Kn).toBe(20);
    expect(params.n).toBe(2);
    expect(params.r).toBe(0.05);
  });

  it("should calculate M", () => {
    const params = new LokatyParamsBuilder().setM("monthly", "yearly").build();
    expect(params.m).toBe(12);
  });

  it("K0 should be undefined when not set", () => {
    const params = new LokatyParamsBuilder().build();
    expect(params.K0).toBeUndefined();
  });
});
