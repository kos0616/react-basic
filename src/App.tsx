// import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <h1>React Hooks Examples</h1>
      <Outlet />
    </>
  );
}
