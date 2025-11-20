// import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <>
      <Navbar className="bg-zinc-200 text-amber-600"></Navbar>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
