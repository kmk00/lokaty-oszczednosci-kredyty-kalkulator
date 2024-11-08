import { useForm } from "react-hook-form";
import { LokatyInputs, LokatyOptions } from "../../vite-env";
import { useState } from "react";

const LokatyForm = ({
  setAnswer,
}: {
  setAnswer: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [option, setOption] = useState<LokatyOptions | null>("Kn");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "") {
      setOption(null);
    } else {
      setOption(value as LokatyOptions);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LokatyInputs>();

  const onSubmit = (data: LokatyInputs) => {
    if (option === undefined) return;
    console.log(option, data);
  };

  return (
    <form className="w-full mt-2 grid gap-2">
      <div className="mt-2">
        <label htmlFor="option" className="text-[10px]">
          Wybierz opcię do obliczenia
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

      <div className={`${option === "K0" && "hidden"}`}>
        <label htmlFor="K0" className="text-[10px]">
          Kapitał początkowy
        </label>
        <input
          id="K0"
          className="input input-bordered w-full"
          type="number"
          placeholder="K0"
          {...register("K0", { required: option !== "K0" })}
        />
        {errors.K0 && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div className={`${option === "Kn" && "hidden"}`}>
        <label htmlFor="Kn" className="text-[10px]">
          Kapitał końcowy
        </label>
        <input
          id="Kn"
          className={`input input-bordered w-full`}
          type="number"
          placeholder="Kn"
          {...register("Kn", { required: option !== "Kn" })}
        />
        {errors.Kn && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div className={`${option === "r" && "hidden"}`}>
        <label htmlFor="r" className="text-[10px]">
          Stopa procentowa
        </label>
        <input
          className={`input input-bordered w-full `}
          type="number"
          placeholder="r"
          {...register("r", { required: option !== "r" })}
        />
        {errors.r && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

      <div className={`${option === "n" && "hidden"}`}>
        <label htmlFor="n" className="text-[10px]">
          Okres obliczeniowy
        </label>
        <input
          className={`input input-bordered w-full `}
          type="number"
          placeholder="n"
          {...register("n", { required: option !== "n" })}
        />
        {errors.n && (
          <span className="text-warning">This field is required</span>
        )}
      </div>

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
