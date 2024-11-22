import { useForm } from "react-hook-form";
import { OszczednosciInputs, OszczednosciOptions } from "../../vite-env";
import { useEffect } from "react";
import { calculateOszczednosci } from "../../lib/oszczednosci.ts";

const OszczednosciForm = ({
  setAnswer,
  handleOptionChange,
  option,
}: {
  setAnswer: React.Dispatch<React.SetStateAction<number | null>>;
  handleOptionChange: React.ChangeEventHandler<HTMLSelectElement>;
  option: OszczednosciOptions;
}) => {
  enum timePeriodsEnum {
    monthly,
    quarterly,
    halfYearly,
    yearly,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OszczednosciInputs>();

  const onSubmit = (data: OszczednosciInputs) => {
    if (option === undefined) return;

    const answer = calculateOszczednosci(option, data);
    setAnswer(answer);
  };

  useEffect(() => {
    setAnswer(null);
  }, [option]);

  return (
    <form className="w-full mt-2 mb-4 grid gap-4">
      <div className="mt-2">
        <label htmlFor="option" className="text-sm">
          Do obliczenia
        </label>
        <select
          id="option"
          onChange={handleOptionChange}
          className="select select-bordered w-full mt-2"
        >
          <option defaultChecked value={"Kn"}>
            Kn - Kapitał końcowy
          </option>
          <option value={"n"}>n - Czas trwania</option>
          <option value={"E"}>E - Wielkość wpłat</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="from" className="text-sm">
          Wpłaty dokonywane
        </label>
        <select
          id="from"
          {...register("from", { required: true })}
          className="select select-bordered w-full mt-2"
        >
          <option value={"up"} defaultChecked>
            Z góry
          </option>
          <option value={"down"} defaultChecked>
            Z dołu
          </option>
        </select>
      </div>

      {option !== "E" && (
        <div>
          <label htmlFor="E" className="text-sm">
            Stopa procentowa - wartość
          </label>
          <input
            id="E"
            className={`input input-bordered w-full `}
            type="number"
            placeholder="E"
            {...register("E", { required: true })}
          />
          {errors.r && (
            <span className="text-warning">This field is required</span>
          )}
        </div>
      )}

      <div>
        <label htmlFor="EFrequency" className="text-sm">
          Częstotliwość wpłat
        </label>
        <select
          id="EFrequency"
          {...register("EFrequency", { required: true })}
          className="select select-bordered w-full mt-2"
        >
          <option value={timePeriodsEnum.yearly} defaultChecked>
            Co rok
          </option>
          <option value={timePeriodsEnum.halfYearly}>Co pół roku</option>
          <option value={timePeriodsEnum.quarterly}>Co kwartał</option>
          <option value={timePeriodsEnum.monthly}>Co miesiąc</option>
        </select>
        {errors.EFrequency && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div>
        <label htmlFor="kapitalization" className="text-sm">
          Okres kapitalizacji
        </label>
        <select
          id="kapitalization"
          className="select select-bordered w-full mt-2"
          {...register("capitalization", { required: true })}
        >
          <option defaultChecked value={timePeriodsEnum.yearly}>
            Roczny
          </option>
          <option value={timePeriodsEnum.halfYearly}>Półroczny</option>
          <option value={timePeriodsEnum.quarterly}>Kwartalny</option>
          <option value={timePeriodsEnum.monthly}>Miesięczny</option>
        </select>
        {errors.capitalization && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div>
        <label htmlFor="rRate" className="text-sm">
          Stopa procentowa - okres
        </label>
        <select
          id="rRate"
          {...register("rRate", { required: true })}
          className="select select-bordered w-full mt-2"
        >
          <option defaultChecked value={timePeriodsEnum.yearly}>
            Roczna
          </option>
          <option value={timePeriodsEnum.halfYearly}>Półroczna</option>
          <option value={timePeriodsEnum.quarterly}>Kwartalna</option>
          <option value={timePeriodsEnum.monthly}>Miesięczna</option>
        </select>
        {errors.rRate && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div>
        <label htmlFor="r" className="text-sm">
          Stopa procentowa - wartość
        </label>
        <input
          id="r"
          className={`input input-bordered w-full `}
          type="number"
          placeholder="r [%]"
          {...register("r", { required: true })}
        />
        {errors.r && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      {option !== "Kn" && (
        <div>
          <label htmlFor="Kn" className="text-sm">
            Kapitał końcowy
          </label>
          <input
            id="Kn"
            className={`input input-bordered w-full`}
            type="number"
            placeholder="Kn"
            {...register("Kn", { required: true })}
          />
          {errors.Kn && (
            <span className="text-warning">This field is required</span>
          )}
        </div>
      )}

      {option !== "n" && (
        <div>
          <label htmlFor="n" className="text-sm">
            Okres obliczeniowy
          </label>
          <input
            className={`input input-bordered w-full `}
            type="number"
            placeholder="n"
            {...register("n", { required: true })}
          />
          {errors.n && (
            <span className="text-warning">This field is required</span>
          )}
        </div>
      )}

      <button
        className="btn btn-primary w-full mt-4"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Oblicz
      </button>
    </form>
  );
};

export default OszczednosciForm;
