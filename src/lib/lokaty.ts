import {
  LokatyInputs,
  LokatyOptions,
  ModelsAnswers,
  timePeriod,
} from "../vite-env";

export const calculateLokaty = (
  option: LokatyOptions,
  data: LokatyInputs
): ModelsAnswers => {
  switch (option) {
    case "Kn":
      return calculateKn(
        data.K0,
        data.n,
        data.r,
        data.capitalization,
        data.rRate
      );
    case "K0":
      return calculateK0(
        data.Kn,
        data.n,
        data.r,
        data.capitalization,
        data.rRate
      );
    case "r":
      return calculateR(
        data.K0,
        data.Kn,
        data.n,
        data.capitalization,
        data.rRate
      );
    case "n":
      return calculateN(
        data.K0,
        data.Kn,
        data.r,
        data.capitalization,
        data.rRate
      );
    default:
      return { m1: 0, m2: 0, m3: 0, m4: 0 };
  }
};

/**
 *
 * @param K0 - Wartość początkowa
 * @param n - Okres obliczeniowy
 * @param r - Stopa procentowa
 * @param capitalization - okres kapitalizacji
 * @param rRate - Okres stopy procentowej
 * @returns Kn - Kapitał końcowy
 */
const calculateKn = (
  K0: number,
  n: number,
  r: number,
  capitalization: timePeriod,
  rRate: timePeriod
): ModelsAnswers => {
  const KnAnswers: ModelsAnswers = {
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
  };

  const rNum = r / 100;

  // Model 1
  KnAnswers.m1 = Number((K0 * (1 + n * rNum)).toFixed(2));

  // Model 2
  KnAnswers.m2 = Number((K0 * (1 + rNum) ** n).toFixed(2));

  const m = calculateM(capitalization, rRate);
  if (m !== null)
    KnAnswers.m3 = Number((K0 * (1 + rNum / m) ** (n * m)).toFixed(2));
  else KnAnswers.m3 = null;

  // Model 4
  KnAnswers.m4 = Number((K0 * Math.E ** (n * rNum)).toFixed(2));

  return KnAnswers;
};

/**
 *
 * @param Kn - Kapitał końcowy
 * @param n - Okres obliczeniowy
 * @param r - Stopa procentowa
 * @returns K0 - Wartość początkowa
 */
const calculateK0 = (
  Kn: number,
  n: number,
  r: number,
  capitalization: timePeriod,
  rRate: timePeriod
): ModelsAnswers => {
  const KnAnswers: ModelsAnswers = {
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
  };

  const rNum = r / 100;

  // Model 1
  KnAnswers.m1 = Number((Kn / (1 + n * rNum)).toFixed(2));

  // Model 2
  KnAnswers.m2 = Number((Kn / (1 + rNum) ** n).toFixed(2));

  const m = calculateM(capitalization, rRate);
  if (m !== null)
    KnAnswers.m3 = Number((Kn / (1 + rNum / m) ** (n * m)).toFixed(2));
  else KnAnswers.m3 = null;

  // Model 4
  KnAnswers.m4 = Number((Kn / Math.E ** (n * rNum)).toFixed(2));

  return KnAnswers;
};

/**
 *
 * @param K0 - Wartość początkowa
 * @param Kn - Kapitał końcowy
 * @param n - Okres obliczeniowy
 * @returns r - Stopa procentowa
 **/
const calculateR = (
  K0: number,
  Kn: number,
  n: number,
  capitalization: timePeriod,
  rRate: timePeriod
): ModelsAnswers => {
  return { m1: 0, m2: 0, m3: 0, m4: 0 };
};

/**
 *
 * @param K0 - Wartość początkowa
 * @param Kn - Kapitał końcowy
 * @param r - Stopa procentowa
 * @returns n - Okres obliczeniowy
 **/
const calculateN = (
  K0: number,
  Kn: number,
  r: number,
  capitalization: timePeriod,
  rRate: timePeriod
): ModelsAnswers => {
  return { m1: 0, m2: 0, m3: 0, m4: 0 };
};

const calculateM = (
  capitalization: timePeriod,
  rRate: timePeriod
): number | null => {
  if (capitalization === rRate) return 1;

  if (rRate === "yearly") {
    if (capitalization === "halfYearly") return 2;
    if (capitalization === "quarterly") return 4;
    if (capitalization === "monthly") return 12;
  }

  if (rRate === "halfYearly") {
    if (capitalization === "quarterly") return 2;
    if (capitalization === "monthly") return 6;
  }

  if (rRate === "quarterly") {
    if (capitalization === "monthly") return 3;
  }

  return null;
};
