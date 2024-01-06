"use client";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Hero from "./components/Hero/Hero";
import NewPlace from "./components/NewPlace/NewPlace";
import Newsletter from "./components/Newsletter/Newsletter";
import Values from "./components/values/values";
import Signdialog2 from "./components/Navbar/Signdialog2";
import Registerdialog2 from "./components/Navbar/Registerdialog2";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Signdialog2 setIsOpen={setIsOpen} isOpen={isOpen} />
      <Registerdialog2 setIsOpen={setIsOpen1} isOpen={isOpen1} />
      <Toaster />
      <Banner
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIsOpen1={setIsOpen1}
        isOpen1={isOpen1}
      />
      <Hero />
      <NewPlace />
      <Values />
      {/* <Companies /> */}
    </div>
  );
}
