import {
  LokatyInputs,
  LokatyOptions,
  ModelsAnswers,
  timePeriod,
} from "../vite-env";

interface LokatyCalculationStrategy {
  calculate(params: LokatyParams): number;
}

abstract class LokatyCalculatorFactory {
  abstract createStrategy(model: number): LokatyCalculationStrategy;
}

interface LokatyParams {
  K0?: number;
  Kn?: number;
  n?: number;
  r?: number;
  m?: number;
}

class KnModel1 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, n, r } = params;
    if (!K0 || !n || !r) throw new Error("Invalid params");
    return Number((K0 * (1 + n * r)).toFixed(2));
  }
}

class KnModel2 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, n, r } = params;
    if (!K0 || !n || !r) throw new Error("Invalid params");
    return Number((K0 * (1 + r) ** n).toFixed(2));
  }
}

class KnModel3 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, n, r, m } = params;
    if (!K0 || !n || !r || !m) throw new Error("Invalid params");
    return Number((K0 * (1 + r / m) ** (n * m)).toFixed(2));
  }
}

class KnModel4 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, n, r } = params;
    if (!K0 || !n || !r) throw new Error("Invalid params");
    return Number((K0 * Math.E ** (n * r)).toFixed(2));
  }
}

class K0Model1 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { Kn, n, r } = params;
    if (!Kn || !n || !r) throw new Error("Invalid params");
    return Number((Kn / (1 + n * r)).toFixed(2));
  }
}

class K0Model2 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { Kn, n, r } = params;
    if (!Kn || !n || !r) throw new Error("Invalid params");
    return Number((Kn / (1 + r) ** n).toFixed(2));
  }
}
class K0Model3 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");
    return Number((Kn / (1 + r / m) ** (n * m)).toFixed(2));
  }
}
class K0Model4 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { Kn, n, r } = params;
    if (!Kn || !n || !r) throw new Error("Invalid params");
    return Number((Kn / Math.E ** (n * r)).toFixed(2));
  }
}

class RModel1 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, n } = params;
    if (!K0 || !Kn || !n) throw new Error("Invalid params");
    return Number((Kn / K0 / n - 1 / n).toFixed(2)) * 100;
  }
}

class RModel2 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, n } = params;
    if (!K0 || !Kn || !n) throw new Error("Invalid params");

    return Number((Math.pow(Kn / K0, 1 / n) - 1).toFixed(2)) * 100;
  }
}

class RModel3 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, n, m } = params;
    if (!K0 || !Kn || !n || !m) throw new Error("Invalid params");

    return Number((m * (Math.pow(Kn / K0, 1 / (n * m)) - 1)).toFixed(2)) * 100;
  }
}

class RModel4 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, n } = params;
    if (!K0 || !Kn || !n) throw new Error("Invalid params");

    return (
      Number((Math.log(Kn / K0) / (Math.log(Math.E) * n)).toFixed(2)) * 100
    );
  }
}

class NModel1 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, r } = params;
    if (!K0 || !Kn || !r) throw new Error("Invalid params");
    return Number((Kn / K0 / r - 1 / r).toFixed(2));
  }
}
class NModel2 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, r } = params;
    if (!K0 || !Kn || !r) throw new Error("Invalid params");
    return Number((Math.log(Kn / K0) / Math.log(1 + r)).toFixed(2));
  }
}
class NModel3 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, r, m } = params;
    if (!K0 || !Kn || !r || !m) throw new Error("Invalid params");
    return Number((Math.log(Kn / K0) / (Math.log(1 + r / m) * m)).toFixed(2));
  }
}
class NModel4 implements LokatyCalculationStrategy {
  calculate(params: LokatyParams) {
    const { K0, Kn, r } = params;
    if (!K0 || !Kn || !r) throw new Error("Invalid params");
    return Number((Math.log(Kn / K0) / (Math.log(Math.E) * r)).toFixed(2));
  }
}

/**
 * Class that encapsulates the logic of creating the proper calculator strategy
 * based on the selected model (Kn, K0, r, n) and the selected model number.
 */
class KnCalculatorFactory {
  /**
   * Creates a calculator strategy based on the selected model number.
   * @param modelNumber - The selected model number (1-4)
   * @returns A calculator strategy for calculating the final capital (Kn)
   */
  createStrategy(modelNumber: number) {
    switch (modelNumber) {
      case 1:
        return new KnModel1();
      case 2:
        return new KnModel2();
      case 3:
        return new KnModel3();
      case 4:
        return new KnModel4();
      default:
        throw new Error("Unknow model");
    }
  }
}

/**
 * Class that encapsulates the logic of creating the proper calculator strategy
 * based on the selected model (Kn, K0, r, n) and the selected model number.
 */
class K0CalculatorFactory {
  /**
   * Creates a calculator strategy based on the selected model number.
   * @param modelNumber - The selected model number (1-4)
   * @returns A calculator strategy for calculating the initial capital (K0)
   */
  createStrategy(modelNumber: number) {
    switch (modelNumber) {
      case 1:
        return new K0Model1();
      case 2:
        return new K0Model2();
      case 3:
        return new K0Model3();
      case 4:
        return new K0Model4();
      default:
        throw new Error("Unknow model");
    }
  }
}

/**
 * Class that encapsulates the logic of creating the proper calculator strategy
 * based on the selected model (Kn, K0, r, n) and the selected model number.
 */
class RCalculatorFactory {
  /**
   * Creates a calculator strategy based on the selected model number.
   * @param modelNumber - The selected model number (1-4)
   * @returns A calculator strategy for calculating the interest rate (r)
   */
  createStrategy(modelNumber: number) {
    switch (modelNumber) {
      case 1:
        return new RModel1();
      case 2:
        return new RModel2();
      case 3:
        return new RModel3();
      case 4:
        return new RModel4();
      default:
        throw new Error("Unknow model");
    }
  }
}

/**
 * Class that encapsulates the logic of creating the proper calculator strategy
 * based on the selected model (Kn, K0, r, n) and the selected model number.
 */
class NCalculatorFactory {
  /**
   * Creates a calculator strategy based on the selected model number.
   * @param modelNumber - The selected model number (1-4)
   * @returns A calculator strategy for calculating the number of periods (n)
   */
  createStrategy(modelNumber: number) {
    switch (modelNumber) {
      case 1:
        return new NModel1();
      case 2:
        return new NModel2();
      case 3:
        return new NModel3();
      case 4:
        return new NModel4();
      default:
        throw new Error("Unknow model");
    }
  }
}

/**
 * Class that encapsulates the logic of calculating the final capital (Kn) with
 * different formulas, depending on the selected model.
 */
class LokatyCalculator {
  /**
   * The factory that creates the proper calculator strategy
   */
  private readonly factory: LokatyCalculatorFactory;

  /**
   * Constructor that sets up the factory based on the selected model.
   * @param option - The selected model (Kn, K0, r, n)
   */
  constructor(option: LokatyOptions) {
    switch (option) {
      case "Kn":
        this.factory = new KnCalculatorFactory();
        break;
      case "K0":
        this.factory = new K0CalculatorFactory();
        break;
      case "r":
        this.factory = new RCalculatorFactory();
        break;
      case "n":
        this.factory = new NCalculatorFactory();
        break;
      default:
        throw new Error("Unknow model");
    }
  }

  /**
   * Calculates the final capital with the selected model using the provided
   * data.
   * @param data - The data to be used in the calculation
   * @returns An object with the calculated values for each model
   */
  calculate(data: LokatyInputs) {
    const params = new LokatyParamsBuilder()
      .setK0(data.K0)
      .setKn(data.Kn)
      .setN(data.n)
      .setR(data.r)
      .setM(data.capitalization, data.rRate)
      .build();

    return {
      m1: this.factory.createStrategy(1).calculate(params),
      m2: this.factory.createStrategy(2).calculate(params),
      m3: this.factory.createStrategy(3).calculate(params),
      m4: this.factory.createStrategy(4).calculate(params),
    };
  }
}

class LokatyParamsBuilder {
  private params: Partial<LokatyParams> = {};

  /**
   * Set the initial capital (K0)
   * @param K0 - Initial capital value or undefined
   * @returns The instance of LokatyParamsBuilder
   */
  setK0(K0: number | undefined): this {
    this.params.K0 = K0 || undefined;
    return this;
  }

  /**
   * Set the final capital (Kn)
   * @param Kn - Final capital value or undefined
   * @returns The instance of LokatyParamsBuilder
   */
  setKn(Kn: number | undefined): this {
    this.params.Kn = Kn || undefined;
    return this;
  }

  /**
   * Set the calculation period (n)
   * @param n - Calculation period value or undefined
   * @returns The instance of LokatyParamsBuilder
   */
  setN(n: number | undefined): this {
    this.params.n = n || undefined;
    return this;
  }

  /**
   * Set the interest rate (r) and convert it to a fraction
   * @param r - Interest rate value or undefined
   * @returns The instance of LokatyParamsBuilder
   */
  setR(r: number | undefined): this {
    r !== undefined ? (this.params.r = r / 100) : undefined;
    return this;
  }

  /**
   * Set the capitalization period and rate
   * @param capitalization - The capitalization period
   * @param rRate - The interest rate period
   * @returns The instance of LokatyParamsBuilder
   */
  setM(capitalization: timePeriod, rRate: timePeriod): this {
    this.params.m = this.calculateM(capitalization, rRate);
    return this;
  }

  /**
   * Build and return the LokatyParams object
   * @returns The built LokatyParams object
   */
  build(): LokatyParams {
    return this.params as LokatyParams;
  }

  /**
   * Calculate the number of capitalizations in one interest rate period
   * @param capitalization - Capitalization period
   * @param rRate - Interest rate period
   * @returns The number of capitalizations
   */
  private calculateM(capitalization: timePeriod, rRate: timePeriod): number {
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
    return 1;
  }
}

export const calculateLokaty = (
  option: LokatyOptions,
  data: LokatyInputs
): ModelsAnswers => {
  const calculator = new LokatyCalculator(option);
  return calculator.calculate(data);
};

export {
  K0Model1,
  K0Model2,
  K0Model3,
  K0Model4,
  RModel1,
  RModel2,
  RModel3,
  RModel4,
  NModel1,
  NModel2,
  NModel3,
  NModel4,
  KnModel1,
  KnModel2,
  KnModel3,
  KnModel4,
  K0CalculatorFactory,
  RCalculatorFactory,
  NCalculatorFactory,
  KnCalculatorFactory,
  LokatyCalculator,
  LokatyParamsBuilder,
};
