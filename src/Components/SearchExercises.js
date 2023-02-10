import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { exerciseOptions, fetchData } from "../services/Api.js";
import HorizontalScrollBar from "./HorizontalScrollBar.js";
import { Stack, Button, Typography } from "@mui/material";
import { Navigate, useNavigate, Link } from "react-router-dom";

import pushups from "../assets/gif/pushups1.gif";

function SearchExercises() {
  const [searched, setSearched] = useState("");
  const [exercise, setExercise] = useState([]);
  const [display, setDisplay] = useState([]);

  console.log(exercise.length);

  const handleSearch = (e) => {
    setSearched(e.target.value.toLowerCase());
  };

  const handleSearchBtn = async () => {
    //for randomly selecting elements`
    //array.sort(() => Math.random() - Math.random()).slice(0, n)

    if (searched) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${searched}`,
        exerciseOptions
      );

      console.log(exerciseData.slice(0, 5));

      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searched) ||
          exercise.bodyPart.toLowerCase().includes(searched) ||
          exercise.equipment.toLowerCase().includes(searched) ||
          exercise.target.toLowerCase().includes(searched)
      );
      setSearched("");
      setExercise(searchedExercise.slice(0, 10));

      console.log("length is " + exercise);
    }
  };

  // useEffect(() => {
  //   const exData =  fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',exerciseOptions).then((data)=>
  //   {
  //     console.log(data.slice(0,10))
  //     setDisplay(data)

  //   })
  //   // const x=exData.slice(0,10)
  //   // setDisplay(x)
  // },[]);

  return (
    <div className="mb-8 mt-8">
      <div className="h-60 w-screen  flex flex-row md:mx-48 ">
        <img src={pushups} classname="h-4 p-8" />
        <h1 className="text-6xl text-black mt-2 mb-4 text-center ml-48 shadow-">
          Awesome Exercises <br />
          For You
        </h1>
      </div>

      <Box>
        <div className=" border ">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: 1,
              borderColor: "primary.main",
              borderRadius: "4px",
            },
            width: { lg: "1170px", xs: "350px" },
            borderRadius: "40px",
          }}
          id="outlined-basic"
          type="text"
          variant="outlined"
          placeholder="Search Exercises"
          value={searched}
          onChange={(e) => handleSearch(e)}
        />
        <button
          className="border-radius rounded-lg  text-2xl  bg-red-500 mt-1 ml-4   px-8 py-2 text-white font-serif"
          onClick={() => handleSearchBtn()}
        >
          Search{" "}
        </button>{" "}
        </div>
      </Box>

      {/* <HorizontalScrollBar data={searched}/> */}
      <div className="w-full bg-slate-300 h-auto mt-14 px-8 flex flex-row  ">
        <div className="w-96 h-96 m-8 flex flex-nowrap">
          {display.map((item) => {
            <div>
              <img src={item.girUrl} />
            </div>;
            // <img src={item.gifUrl} alt="" />
            console.log(item.gifUrl);
          })}
          {/* <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={searched.gifUrl} alt={searched.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {searched.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {searched.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {searched.name}
    </Typography>
  </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SearchExercises;
