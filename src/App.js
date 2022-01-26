import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import DropDown from "./components/DropDown";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
}

export default App;
