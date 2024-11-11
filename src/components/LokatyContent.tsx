import { useState } from "react";
import LokatyForm from "./forms/LokatyForm";
import { LokatyOptions, ModelsAnswers } from "../vite-env";
import LokatyAnswers from "./answers/LokatyAnswers";

const LokatyContent = () => {
  const [answer, setAnswer] = useState<ModelsAnswers | null>(null);
  const [option, setOption] = useState<LokatyOptions>("Kn");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setOption(value as LokatyOptions);
  };

  return (
    <div className="w-full px-2">
      {answer && <LokatyAnswers option={option} answers={answer} />}
      <LokatyForm
        setAnswer={setAnswer}
        handleOptionChange={handleOptionChange}
        option={option}
      />
    </div>
  );
};

export default LokatyContent;
