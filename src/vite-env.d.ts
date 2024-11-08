/// <reference types="vite/client" />

export type LokatyOptions = "Kn" | "K0" | "n" | "r";

export interface LokatyInputs {
  r: number;
  Kn: number;
  K0: number;
  n: number;
  capitalization: timePeriod;
  rRate: timePeriod;
}

export type timePeriod = "monthly" | "quarterly" | "halfYearly" | "yearly";

export interface ModelsAnswers {
  m1: number | null;
  m2: number | null;
  m3: number | null;
  m4: number | null;
}
