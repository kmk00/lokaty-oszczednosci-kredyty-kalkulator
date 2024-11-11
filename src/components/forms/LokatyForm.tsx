import { useForm } from "react-hook-form";
import { LokatyInputs, LokatyOptions, ModelsAnswers } from "../../vite-env";
import { calculateLokaty } from "../../lib/lokaty.ts";
import { useEffect } from "react";

const LokatyForm = ({
  setAnswer,
  handleOptionChange,
  option,
}: {
  setAnswer: React.Dispatch<React.SetStateAction<ModelsAnswers | null>>;
  handleOptionChange: React.ChangeEventHandler<HTMLSelectElement>;
  option: LokatyOptions;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LokatyInputs>();

  const onSubmit = (data: LokatyInputs) => {
    if (option === undefined) return;

    const answer = calculateLokaty(option, data);
    setAnswer(answer);
  };

  useEffect(() => {
    setAnswer(null);
  }, [option]);

  return (
    <form className="w-full mt-2 mb-4 grid gap-2">
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
          <option value={"K0"}>K0 - Kapitał początkowy</option>
          <option value={"n"}>n - czas trwania</option>
          <option value={"r"}>r - stopa procentowa</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="kapitalization" className="text-sm">
          Okres kapitalizacji
        </label>
        <select
          id="kapitalization"
          className="select select-bordered w-full mt-2"
          {...register("capitalization", { required: true })}
        >
          <option defaultChecked value={"yearly"}>
            Roczny
          </option>
          <option value={"halfYearly"}>Półroczny</option>
          <option value={"quarterly"}>Kwartalny</option>
          <option value={"monthly"}>Miesięczny</option>
        </select>
      </div>

      <div>
        <label htmlFor="rRate" className="text-sm">
          Stopa procentowa
        </label>
        <select
          id="rRate"
          {...register("rRate", { required: true })}
          className="select select-bordered w-full mt-2"
        >
          <option defaultChecked value={"yearly"}>
            Roczna
          </option>
          <option value={"halfYearly"}>Półroczna</option>
          <option value={"quarterly"}>Kwartalna</option>
          <option value={"monthly"}>Miesięczna</option>
        </select>
      </div>

      {option !== "r" && (
        <div>
          <label htmlFor="r" className="text-sm">
            Stopa procentowa
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
      )}

      {option !== "K0" && (
        <div>
          <label htmlFor="K0" className="text-sm">
            Kapitał początkowy
          </label>
          <input
            id="K0"
            className="input input-bordered w-full"
            type="number"
            placeholder="K0"
            {...register("K0", { required: true })}
          />
          {errors.K0 && (
            <span className="text-warning">This field is required</span>
          )}
        </div>
      )}

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

export default LokatyForm;
