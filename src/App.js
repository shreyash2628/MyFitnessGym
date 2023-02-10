import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ExercisePage from "./Pages/ExercisePage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";



function App() {
  return (
    <div className="  h-auto  ">

      {/* <Home /> */}

      <BrowserRouter>
      <NavBar />

     

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />

          


          {/* <Route path="/addEmployeeDetails" element={<AddEmployeeDetails />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>

     

      {/* <Home/> */}
    </div>
  );
}

export default App;
