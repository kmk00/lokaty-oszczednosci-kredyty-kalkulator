// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import App from "../../App";

it("test", () => {});

// // Helper function to wrap component with router
// const renderWithRouter = (component: React.ReactNode) => {
//   return render(<BrowserRouter>{component}</BrowserRouter>);
// };

// describe("App Component", () => {
//   it("renders without crashing", () => {
//     renderWithRouter(<App />);
//     expect(document.querySelector("main")).toBeInTheDocument();
//   });

//   it("renders Navigation component", () => {
//     renderWithRouter(<App />);
//     // You'll need to add a test-id or specific text in Navigation component
//     expect(document.querySelector("nav")).toBeInTheDocument();
//   });

//   it("renders children when provided", () => {
//     const testChild = <div data-testid="test-child">Test Child Content</div>;
//     renderWithRouter(<App>{testChild}</App>);

//     expect(screen.getByTestId("test-child")).toBeInTheDocument();
//     expect(screen.getByText("Test Child Content")).toBeInTheDocument();
//   });

//   it("applies correct CSS classes to main container", () => {
//     renderWithRouter(<App />);
//     const mainElement = document.querySelector("main");
//     expect(mainElement).toHaveClass(
//       "grid",
//       "place-items-center",
//       "overflow-y-hidden"
//     );
//   });

//   it("applies correct CSS classes to children container when children are present", () => {
//     const testChild = <div>Test Child</div>;
//     renderWithRouter(<App>{testChild}</App>);

//     const childrenContainer = document.querySelector("main > div");
//     expect(childrenContainer).toHaveClass(
//       "grid",
//       "place-items-center",
//       "mt-4",
//       "w-full",
//       "max-w-xl",
//       "px-4"
//     );
//   });

//   it("does not render children container when no children are provided", () => {
//     renderWithRouter(<App />);
//     const childrenContainer = document.querySelector("main > div");
//     expect(childrenContainer).not.toBeInTheDocument();
//   });
// });
