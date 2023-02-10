import React from 'react'
import Stack from '@mui/material/Stack';
import Logo from '../assets/images/Logo.png'
// import { Link } from "react-router-dom";
import { Navigate, useNavigate, Link } from "react-router-dom";



function NavBar() {
  const navigate = useNavigate();

  const handleHome=()=>
  {
    navigate('/home')

  }

  const handleExercise=()=>
  {
    navigate('/exercise')

  }
  const handleLogin=()=>
  {
    navigate('/login')

  }
  
  return (
    <div>

    <Stack direction="row" className=' flex flex-row pt-4 pb-2 border'>
        <div className=' w-auto h-10 flex flex-row mr-8'>

        <img className="w-10 h-10 ml-4" src={Logo}/>
        <h1 className='font-extrabold font ml-2 mt-2 w-auto'>MyFitness  </h1>
        </div>

        
        
            <div direction="row" className='flex flex-row h-10 w-full justify-end  pr-8'>

            <button className='ml-2 font-bold hover:underline' onClick={()=>handleHome()}>Home</button>
            <button className='ml-8 font-bold hover:underline'onClick={()=>handleExercise()}>Exercises</button>
            <button className='ml-8 font-bold hover:underline 'onClick={()=>handleLogin()}>Login</button>

            {/* <button className='ml-8 font-bold'>Exercises</button> */}



            </div>


    </Stack>


    </div>
  )
}

export default NavBar