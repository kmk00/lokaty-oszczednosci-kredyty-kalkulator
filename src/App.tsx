import Navigation from "./components/Navigation";
import { calculateLokaty } from "./lib/lokaty2";

interface Props {
  children?: React.ReactNode;
}

function App({ children }: Props) {
  const calculated = calculateLokaty("Kn", {
    K0: 2000,
    Kn: undefined,
    n: 2,
    r: 24,
    capitalization: "yearly",
    rRate: "yearly",
  });

  console.log("App component: ", calculated);

  return (
    <main className="grid place-items-center overflow-y-hidden">
      <Navigation />
      {/* {children && (
        <div className="grid place-items-center mt-4 w-full max-w-xl px-4">
          {children}
        </div>
      )} */}
    </main>
  );
}

export default App;
