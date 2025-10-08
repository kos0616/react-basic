import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import UseMemo from "./components/UseMemo.tsx";
import UseCallback from "./components/UseCallback.tsx";
import AsyncData from "./components/AsyncData.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/memo",
    element: <UseMemo />,
  },
  { path: "/callback", element: <UseCallback /> },
  { path: "/async", element: <AsyncData /> },
]);

export default router;
