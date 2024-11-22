import {
  EFrom,
  ModelsAnswers,
  OszczednosciInputs,
  OszczednosciOptions,
  timePeriod,
} from "../vite-env";

interface OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams): number;
}

abstract class OszczednosciCalculatorFactory {
  abstract createStrategy(
    model: number,
    from: EFrom
  ): OszczednosciCalculationStrategy;
}

interface OszczednosciParams {
  Kn?: number;
  n?: number;
  r?: number;
  m?: number;
  E?: number;
  from: EFrom;
}

class KnModel1Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r } = params;
    if (!E || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const answer = (E * q * (q ** n - 1)) / (q - 1);

    return Number(answer.toFixed(2));
  }
}

class KnModel1Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r } = params;
    if (!E || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const answer = (E * (q ** n - 1)) / (q - 1);

    return Number(answer.toFixed(2));
  }
}

// class KnModel2Up implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

// class KnModel2Down implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

// class KnModel3Up implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

// class KnModel3Down implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

// class KnModel4Up implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

// class KnModel4Down implements OszczednosciCalculationStrategy {
//   calculate(params: OszczednosciParams) {
//     const { E, n, r } = params;
//     console.log(E, n, r);
//     return Number(2).toFixed(2);
//   }
// }

class KnCalculatorFactory {
  createStrategy(modelNumber: number, from: EFrom) {
    switch (modelNumber) {
      case 1:
        if (from === "up") return new KnModel1Up();
        return new KnModel1Down();

      //   case 2:
      //     if (from === "up") return new KnModel2Up();
      //     return new KnModel2Down();
      //   case 3:
      //     if (from === "up") return new KnModel3Up();
      //     return new KnModel3Down();
      //   case 4:
      //     if (from === "up") return new KnModel4Up();
      //     return new KnModel4Down();

      default:
        throw new Error("Unknow model");
    }
  }
}

class OszczednosciCalculator {
  private readonly factory: OszczednosciCalculatorFactory;

  constructor(option: OszczednosciOptions) {
    switch (option) {
      case "Kn":
        this.factory = new KnCalculatorFactory();
        break;
      default:
        throw new Error("Unknow model");
    }
  }

  determineModel(data: OszczednosciInputs): number {
    // Model 1 = the same frequency

    const EFrequency = Number(data.EFrequency);
    const capitalization = Number(data.capitalization);
    const rRate = Number(data.rRate);

    console.log(EFrequency, capitalization, rRate);

    if (
      EFrequency === capitalization &&
      EFrequency === rRate &&
      capitalization === rRate
    )
      return 1;

    // Model 2 - capitalization more frequent

    if (capitalization > rRate && capitalization > EFrequency) return 2;

    // Model 3 - capitalization and E more frequent

    if (capitalization > rRate && EFrequency > rRate) return 3;

    // Model 4 - E more frequent

    if (EFrequency > rRate && EFrequency > capitalization) return 4;

    throw new Error("Unknow model");
  }

  calculate(data: OszczednosciInputs) {
    const params = new OszczednosciParamsBuilder()
      .setKn(data.Kn)
      .setN(data.n)
      .setR(data.r)
      .setM(data.capitalization, data.rRate)
      .setE(data.E)
      .setFrom(data.from)
      .build();

    const modelNumber = this.determineModel(data);

    return this.factory
      .createStrategy(modelNumber, data.from)
      .calculate(params);
  }
}

class OszczednosciParamsBuilder {
  private params: Partial<OszczednosciParams> = {};

  setFrom(from: EFrom) {
    this.params.from = from;
    return this;
  }

  setKn(Kn: number | undefined): this {
    this.params.Kn = Kn || undefined;
    return this;
  }

  setN(n: number | undefined): this {
    this.params.n = n || undefined;
    return this;
  }

  setR(r: number | undefined): this {
    r !== undefined ? (this.params.r = r / 100) : undefined;
    return this;
  }

  setE(E: number | undefined): this {
    this.params.E = E || undefined;
    return this;
  }

  setM(capitalization: timePeriod, rRate: timePeriod): this {
    this.params.m = this.calculateM(capitalization, rRate);
    return this;
  }

  build(): OszczednosciParams {
    return this.params as OszczednosciParams;
  }

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

export const calculateOszczednosci = (
  option: OszczednosciOptions,
  data: OszczednosciInputs
): number => {
  const calculator = new OszczednosciCalculator(option);

  return calculator.calculate(data);
};

export {
  KnCalculatorFactory,
  OszczednosciCalculator,
  OszczednosciParamsBuilder,
};
