import { LokatyOptions, ModelsAnswers } from "../../vite-env";

const LokatyAnswers = ({
  answers,
  option,
}: {
  answers: ModelsAnswers;
  option: LokatyOptions;
}) => {
  if (option === "Kn") {
    return (
      <div className="w-full px-4 py-2 rounded-md border input-bordered mt-4">
        <h1 className="text-xl mb-2 text-center">Kapitał końcowy - Kn</h1>
        <p>Oprocentowanie proste: {answers.m1}</p>
        <p>Oprocentowanie złożone: {answers.m2}</p>
        <p>Oprocentowanie w podokresach: {answers.m3}</p>
        <p>Oprocentowanie ciągłe: {answers.m4}</p>
      </div>
    );
  }

  if (option === "K0") {
    return (
      <div className="w-full px-4 py-2 rounded-md border input-bordered mt-4">
        <h1 className="text-xl mb-2 text-center">Kapitał początkowy - K0</h1>
        <p>Oprocentowanie proste: {answers.m1}</p>
        <p>Oprocentowanie złożone: {answers.m2}</p>
        <p>Oprocentowanie w podokresach: {answers.m3}</p>
        <p>Oprocentowanie ciągłe: {answers.m4}</p>
      </div>
    );
  }

  return (
    <div className="w-full p-4 rounded-md border input-bordered mt-4">
      <p>Oprocentowanie proste: {answers.m1}</p>
      <p>Oprocentowanie złożone: {answers.m2}</p>
      <p>Oprocentowanie w podokresach: {answers.m3}</p>
      <p>Oprocentowanie ciągłe: {answers.m4}</p>
    </div>
  );
};

export default LokatyAnswers;
