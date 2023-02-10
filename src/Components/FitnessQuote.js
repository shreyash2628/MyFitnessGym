import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@material-tailwind/react";

function FitnessQuote() {
  return (
    <div className="">
      <Stack className="pl-4 pt-4 ">
        <h1 className=" text-4xl text-red-500	sm:text-6xl lg:text-8xl">BUILD</h1>
        <h1 className=" text-2xl text-white mt-2 sm:text-4xl lg:text-6xl">Your Body With Us</h1>
        <h4 className=" text-sm text-white mt-2 italic sm:text-lg sm:mt-5 lg:text-2xl ">
          -Check out the most personalised exercise for you{" "}
        </h4>

        <button className="border-radius  rounded mt-2 text-xl sm:text-3xl sm:py-1  bg-red-500 hover:bg-red-600  px-2 text-white font-serif lg:text-4xl">
          Explore with us 
        </button>
      </Stack>
    </div>
  );
}

export default FitnessQuote;
