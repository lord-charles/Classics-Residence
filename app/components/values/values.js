"use client";

import { Button } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

const Values = () => {
  return (
    <div className="bg-lightkblue  flex justify-center h-fit pt-2 items-center w-screen pb-10">
      <div
        className="w-full xxxs:mx-[20px] md:mx-[20px] lg:mx-[200px] rounded-md h-fit py-10 px-4 shadow-md"
        style={{ backgroundColor: "#032d3b" }}
      >
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-white  font-serif text-[20px]">Our Values</h2>
          <h1 className="text-white font-bold text-[20px]">
            Inclusive. Safe. Respectful.
          </h1>
          <p className="text-white text-center lg:px-[350px] md:px-[200px] xxxs:px-0">
            Read our full Community Values to see the steps we’re taking to
            ensure Classic Residence is a safe platform for everyone.
          </p>
          <Button
            variant="outlined"
            color="inherit"
            className="text-lightkblue"
            onClick={() => {
              toast.success("Coming soon");
            }}
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Values;
