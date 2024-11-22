/// <reference types="vite/client" />

export type LokatyOptions = "Kn" | "K0" | "n" | "r";

export type OszczednosciOptions = "Kn" | "n" | "r" | "E";

export type EFrom = "up" | "down";

export interface LokatyInputs {
  r: number | undefined;
  Kn: number | undefined;
  K0: number | undefined;
  n: number | undefined;
  capitalization: timePeriod;
  rRate: timePeriod;
}

export interface OszczednosciInputs {
  r: number | undefined;
  Kn: number | undefined;
  n: number | undefined;
  E: number | undefined;
  rRate: timePeriod;
  capitalization: timePeriod;
  EFrequency: timePeriod;
  from: "up" | "down";
}

export type timePeriod = "monthly" | "quarterly" | "halfYearly" | "yearly";

export interface ModelsAnswers {
  m1: number;
  m2: number;
  m3: number;
  m4: number;
}
