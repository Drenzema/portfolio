import { useEffect, useState } from "react";
import React from "react";

import "./assets/general/App.css";
import "normalize.css";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
