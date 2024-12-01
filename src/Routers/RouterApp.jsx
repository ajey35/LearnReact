import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Landing = lazy(() => import("./Landing"));
const DashBoard = lazy(() => import("./DashBoard"));

function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Child />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Child() {
  const navigate = useNavigate(); // Ensure it is within BrowserRouter
  return (
    <div>
      <h1 style={{background:"red"}}>TOP BAR</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        DashBoard Page
      </button>
    </div>
  );
}

export default RouterApp;
