import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SignIn from "./components/signin";
import Landing from "./components/landing/welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
