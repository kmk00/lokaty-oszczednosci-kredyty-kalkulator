import { OszczednosciOptions } from "../../vite-env";

const OszczednosciAnswers = ({
  answers,
  option,
}: {
  answers: number;
  option: OszczednosciOptions;
}) => {
  const title = () => {
    switch (option) {
      case "Kn":
        return "Kapitał końcowy - Kn";
      case "r":
        return "Stopa procentowa - r";
      case "n":
        return "Okres obliczeniowy - n";
      case "E":
        return "Wartość obliczeniowa - E";
      default:
        return "Wartość obliczeniowa - K";
    }
  };

  return (
    <div className="w-full p-4 rounded-md border input-bordered my-4">
      <h1 className="text-xl mb-2 text-center">{title()}</h1>
      <p>{answers}</p>
    </div>
  );
};

export default OszczednosciAnswers;
