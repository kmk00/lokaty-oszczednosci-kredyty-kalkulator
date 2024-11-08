import { useState } from "react";
import LokatyForm from "./forms/LokatyForm";

const LokatyContent = () => {
  const [answer, setAnswer] = useState<number | null>(null);

  return (
    <div className="w-full px-2">
      <h1 className="text-center text-xl">Lokaty</h1>
      <LokatyForm setAnswer={setAnswer} />
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default LokatyContent;
