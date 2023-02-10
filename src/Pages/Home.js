import React from "react";
import Fitness from "../assets/images/try.png";
import Stack from "@mui/material/Stack";
import FitnessQuote from "../Components/FitnessQuote";

import Box from "@mui/material/Box";
import { Fullscreen } from "@mui/icons-material";
import SearchExercises from "../Components/SearchExercises";
import BodyParts from "../Components/BodyParts";
import Footer from "../Components/Footer";
import MembershipPlans from "../Components/MembershipPlans";

function Home() {
  return (
    <div className="border w-screen">
      <Box className=" mt-2 sm:h-80 h-72 shadow-2xl  mx-4 bg-black  rounded-xl sm:mx-8 md:mx-16 lg:mx-56 lg:h-96 border">
        <Stack direction="row" className="justify-end sm:justify-center ">
          <FitnessQuote />
          <img className="  shadow-2xl w-48 sm:w-52 lg:w-56 " src={Fitness} />
        </Stack>
      </Box>

      <MembershipPlans className="mt-"/>

       <BodyParts />

      <Footer /> 
    </div>
  );
}

export default Home;
