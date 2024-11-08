import { useState } from "react";
import LokatyForm from "./forms/LokatyForm";
import { LokatyOptions, ModelsAnswers } from "../vite-env";
import LokatyAnswers from "./answers/lokatyAnswers";

const LokatyContent = () => {
  const [answer, setAnswer] = useState<ModelsAnswers | null>(null);
  const [option, setOption] = useState<LokatyOptions>("Kn");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setOption(value as LokatyOptions);
  };

  return (
    <div className="w-full px-2">
      <h1 className="text-center text-xl">Lokaty</h1>
      <LokatyForm
        setAnswer={setAnswer}
        handleOptionChange={handleOptionChange}
        option={option}
      />
      {answer && <LokatyAnswers option={option} answers={answer} />}
    </div>
  );
};

export default LokatyContent;
