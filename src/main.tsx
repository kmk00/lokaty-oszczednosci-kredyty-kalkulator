import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LokatyContent from "./components/LokatyContent.tsx";
import OszczednosciContent from "./components/OszczednosciContent.tsx";
import KredytyContent from "./components/KredytyContent.tsx";
import Home from "./components/Home.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App children={<Home />} />,
    },
    {
      path: "/lokaty",
      element: <App children={<LokatyContent />} />,
    },
    {
      path: "/oszczednosci",
      element: <App children={<OszczednosciContent />} />,
    },
    {
      path: "/kredyty",
      element: <App children={<KredytyContent />} />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={router}
    ></RouterProvider>
  </StrictMode>
);
