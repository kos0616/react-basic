import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import useTodo from "./pages/Todo/index.tsx";
import UseMemo from "./pages/UseMemo.tsx";
import UseCallback from "./pages/UseCallback.tsx";
import AsyncData from "./pages/AsyncData.tsx";
import ChatRoom from "./pages/ChatRoom/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: useTodo,
      },
      {
        path: "/todo",
        Component: useTodo,
      },
      {
        path: "/memo",
        Component: UseMemo,
      },
      { path: "/callback", Component: UseCallback },
      { path: "/async", Component: AsyncData },
      { path: "/chatroom", Component: ChatRoom },
    ],
  },
]);

export default router;
