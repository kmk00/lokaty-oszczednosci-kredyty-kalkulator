import { EFrom, OszczednosciInputs, OszczednosciOptions } from "../vite-env";

enum timePeriodsEnum {
  monthly,
  quarterly,
  halfYearly,
  yearly,
}

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
  from?: EFrom;
}

class KnModel1Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r } = params;
    if (!E || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const Kn = (E * q * (q ** n - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel1Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r } = params;
    if (!E || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const Kn = (E * (q ** n - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel2Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;
    const Kn = (E * q * (q ** n - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel2Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;

    const Kn = (E * (q ** n - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel3Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const Kn = (E * q * (q ** (n * m) - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel3Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const Kn = (E * (q ** (n * m) - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

class KnModel4Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");
    const q = 1 + r;

    const Kn = E * (m + ((m + 1) / 2) * r) * ((q ** n - 1) / (q - 1));

    return Number(Kn.toFixed(2));
  }
}

class KnModel4Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, n, r, m } = params;
    if (!E || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r;
    const Kn = (E * (m + ((m - 1) / 2) * r) * (q ** n - 1)) / (q - 1);

    return Number(Kn.toFixed(2));
  }
}

// -----------

class NModel1Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r } = params;
    if (!E || !Kn || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const n = Math.log(1 + (Kn * (q - 1)) / (E * q)) / Math.log(q);

    return Number(n.toFixed(2));
  }
}

class NModel1Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r } = params;
    if (!E || !Kn || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const n = Math.log((Kn * (q - 1)) / E + 1) / Math.log(q);

    return Number(n.toFixed(2));
  }
}

class NModel2Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;
    const n = Math.log(1 + (Kn * (q - 1)) / (E * q)) / Math.log(q);

    return Number(n.toFixed(2));
  }
}

class NModel2Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;
    const n = Math.log(1 + (Kn * (q - 1)) / E) / Math.log(q);

    return Number(n.toFixed(2));
  }
}

class NModel3Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const n = Math.log(1 + (Kn * (q - 1)) / (E * q)) / (m * Math.log(q));

    return Number(n.toFixed(2));
  }
}

class NModel3Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const n = Math.log(1 + (Kn * (q - 1)) / E) / (m * Math.log(q));

    return Number(n.toFixed(2));
  }
}

class NModel4Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + r;
    const n =
      Math.log(1 + (Kn * (q - 1)) / (E * (m + ((m + 1) / 2) * r))) /
      Math.log(q);

    return Number(n.toFixed(2));
  }
}

class NModel4Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { E, Kn, r, m } = params;
    if (!E || !Kn || !r || !m) throw new Error("Invalid params");

    const q = 1 + r;
    const n =
      Math.log(1 + (Kn * (q - 1)) / (E * (m + ((m - 1) / 2) * r))) /
      Math.log(q);

    return Number(n.toFixed(2));
  }
}

// -----------

class EModel1Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r } = params;
    if (!Kn || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const E = (Kn * (q - 1)) / (q * (q ** n - 1));

    return Number(E.toFixed(2));
  }
}

class EModel1Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r } = params;
    if (!Kn || !n || !r) throw new Error("Invalid params");

    const q = 1 + r;
    const E = (Kn * (q - 1)) / (q ** n - 1);

    return Number(E.toFixed(2));
  }
}

class EModel2Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;
    const E = (Kn * (q - 1)) / (q * (q ** n - 1));

    return Number(E.toFixed(2));
  }
}

class EModel2Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + (1 + r / m) ** m - 1;
    const E = (Kn * (q - 1)) / (q ** n - 1);

    return Number(E.toFixed(2));
  }
}

class EModel3Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const E = (Kn * (q - 1)) / (q * (q ** (n * m) - 1));

    return Number(E.toFixed(2));
  }
}

class EModel3Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r / m;
    const E = (Kn * (q - 1)) / (q ** (n * m) - 1);

    return Number(E.toFixed(2));
  }
}

class EModel4Up implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r;
    const E = (Kn * (q - 1)) / ((m + ((m + 1) / 2) * r) * (q ** n - 1));

    return Number(E.toFixed(2));
  }
}

class EModel4Down implements OszczednosciCalculationStrategy {
  calculate(params: OszczednosciParams) {
    const { Kn, n, r, m } = params;
    if (!Kn || !n || !r || !m) throw new Error("Invalid params");

    const q = 1 + r;
    const E = (Kn * (q - 1)) / ((m + ((m - 1) / 2) * r) * (q ** n - 1));

    return Number(E.toFixed(2));
  }
}

class KnCalculatorFactory {
  createStrategy(modelNumber: number, from: EFrom) {
    switch (modelNumber) {
      case 1:
        if (from === "up") return new KnModel1Up();
        return new KnModel1Down();
      case 2:
        if (from === "up") return new KnModel2Up();
        return new KnModel2Down();
      case 3:
        if (from === "up") return new KnModel3Up();
        return new KnModel3Down();
      case 4:
        if (from === "up") return new KnModel4Up();
        return new KnModel4Down();

      default:
        throw new Error("Unknow modesadsdal");
    }
  }
}

class NCalculatorFactory {
  createStrategy(modelNumber: number, from: EFrom) {
    switch (modelNumber) {
      case 1:
        if (from === "up") return new NModel1Up();
        return new NModel1Down();
      case 2:
        if (from === "up") return new NModel2Up();
        return new NModel2Down();
      case 3:
        if (from === "up") return new NModel3Up();
        return new NModel3Down();
      case 4:
        if (from === "up") return new NModel4Up();
        return new NModel4Down();
      default:
        throw new Error("Unknow model");
    }
  }
}

class ECalculatorFactory {
  createStrategy(modelNumber: number, from: EFrom) {
    switch (modelNumber) {
      case 1:
        if (from === "up") return new EModel1Up();
        return new EModel1Down();
      case 2:
        if (from === "up") return new EModel2Up();
        return new EModel2Down();
      case 3:
        if (from === "up") return new EModel3Up();
        return new EModel3Down();
      case 4:
        if (from === "up") return new EModel4Up();
        return new EModel4Down();
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
      case "n":
        this.factory = new NCalculatorFactory();
        break;
      case "E":
        this.factory = new ECalculatorFactory();
        break;

      default:
        throw new Error("Unknow model");
    }
  }

  determineModel(data: OszczednosciInputs): number {
    console.log(data);
    const EFrequency = Number(data.EFrequency);
    const capitalization = Number(data.capitalization);
    const rRate = Number(data.rRate);

    // Model 1 = the same frequency
    if (
      EFrequency === capitalization &&
      EFrequency === rRate &&
      capitalization === rRate
    )
      return 1;

    // Model 2 - capitalization more frequent
    if (capitalization < rRate && capitalization < EFrequency) return 2;

    // Model 3 - capitalization and E more frequent
    if (capitalization < rRate && EFrequency < rRate) return 3;

    // Model 4 - E more frequent
    if (EFrequency < rRate && EFrequency < capitalization) return 4;

    throw new Error("Unknow model");
  }

  calculate(data: OszczednosciInputs) {
    const params = new OszczednosciParamsBuilder()
      .setKn(data.Kn)
      .setN(data.n)
      .setR(data.r)
      .setM(data.capitalization, data.rRate, data.EFrequency)
      .setE(data.E)
      .setFrom(data.from)
      .build();

    const modelNumber = this.determineModel(data);
    console.log("Model Number: ", modelNumber);

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
    this.params.n = Number(n) || undefined;
    return this;
  }

  setR(r: number | undefined): this {
    r !== undefined ? (this.params.r = r / 100) : undefined;
    return this;
  }

  setE(E: number | undefined): this {
    this.params.E = Number(E) || undefined;
    return this;
  }

  setM(capitalization: number, rRate: number, EFrequency: number): this {
    this.params.m = this.calculateM(capitalization, rRate, EFrequency);
    return this;
  }

  build(): OszczednosciParams {
    return this.params as OszczednosciParams;
  }

  private calculateM(
    capitalization: number,
    rRate: number,
    EFrequency: number
  ): number {
    if (capitalization === rRate && capitalization != EFrequency) return 12;

    if (rRate === timePeriodsEnum.yearly) {
      if (capitalization === timePeriodsEnum.halfYearly) return 2;
      if (capitalization === timePeriodsEnum.quarterly) return 4;
      if (capitalization === timePeriodsEnum.monthly) return 12;
    }

    if (rRate === timePeriodsEnum.halfYearly) {
      if (capitalization === timePeriodsEnum.quarterly) return 2;
      if (capitalization === timePeriodsEnum.monthly) return 6;
    }

    if (rRate === timePeriodsEnum.quarterly) {
      if (capitalization === timePeriodsEnum.monthly) return 3;
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
  KnModel1Down,
  KnModel1Up,
  KnModel2Down,
  KnModel2Up,
  KnModel3Down,
  KnModel3Up,
  KnModel4Down,
  KnModel4Up,
  NModel1Down,
  NModel1Up,
  NModel2Down,
  NModel2Up,
  NModel3Down,
  NModel3Up,
  NModel4Down,
  NModel4Up,
  EModel1Down,
  EModel1Up,
  EModel2Down,
  EModel2Up,
  EModel3Down,
  EModel3Up,
  EModel4Up,
  EModel4Down,
};
