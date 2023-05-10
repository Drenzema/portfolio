import { useEffect, useState } from "react";
import React from "react";

import "./assets/general/App.css";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
