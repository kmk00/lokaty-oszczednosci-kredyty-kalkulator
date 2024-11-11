import { LokatyOptions, ModelsAnswers } from "../../vite-env";

const LokatyAnswers = ({
  answers,
  option,
}: {
  answers: ModelsAnswers;
  option: LokatyOptions;
}) => {
  const title = () => {
    switch (option) {
      case "Kn":
        return "Kapitał końcowy - Kn";
      case "K0":
        return "Kapitał początkowy - K0";
      case "r":
        return "Stopa procentowa - r";
      case "n":
        return "Okres obliczeniowy - n";
      default:
        return "Wartość obliczeniowa - K";
    }
  };

  return (
    <div className="w-full p-4 rounded-md border input-bordered my-4">
      <h1 className="text-xl mb-2 text-center">{title()}</h1>
      <p>Oprocentowanie proste: {answers.m1}</p>
      <p>Oprocentowanie złożone: {answers.m2}</p>
      <p>Oprocentowanie w podokresach: {answers.m3}</p>
      <p>Oprocentowanie ciągłe: {answers.m4}</p>
    </div>
  );
};

export default LokatyAnswers;
