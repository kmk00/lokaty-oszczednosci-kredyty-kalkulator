/// <reference types="vite/client" />

export type LokatyOptions = "Kn" | "K0" | "n" | "r";

export interface LokatyInputs {
  r: number | undefined;
  Kn: number | undefined;
  K0: number | undefined;
  n: number | undefined;
  capitalization: timePeriod;
  rRate: timePeriod;
}

export type timePeriod = "monthly" | "quarterly" | "halfYearly" | "yearly";

export interface ModelsAnswers {
  m1: number;
  m2: number;
  m3: number;
  m4: number;
}
