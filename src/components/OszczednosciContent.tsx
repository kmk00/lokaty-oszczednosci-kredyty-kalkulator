import { useState } from "react";
import { OszczednosciOptions } from "../vite-env";
import OszczednosciForm from "./forms/OszczednosciForm";
import OszczednosciAnswers from "./answers/OszczednosciAnswers";

const OszczednosciContent = () => {
  const [answer, setAnswer] = useState<number | null>(null);
  const [option, setOption] = useState<OszczednosciOptions>("Kn");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setOption(value as OszczednosciOptions);
  };

  return (
    <div className="w-full px-2">
      {answer && <OszczednosciAnswers option={option} answers={answer} />}
      <OszczednosciForm
        setAnswer={setAnswer}
        handleOptionChange={handleOptionChange}
        option={option}
      />
    </div>
  );
};

export default OszczednosciContent;
