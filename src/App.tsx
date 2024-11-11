import Navigation from "./components/Navigation";

interface Props {
  children?: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <main className="grid place-items-center overflow-y-hidden">
      <Navigation />
      {children && (
        <div className="grid place-items-center mt-4 w-full max-w-xl px-4">
          {children}
        </div>
      )}
    </main>
  );
}

export default App;
