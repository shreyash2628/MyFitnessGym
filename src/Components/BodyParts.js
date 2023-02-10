import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../services/Api.js";
import { cardData } from "../Data/cardData";
import { imageOptions } from "../services/Api.js";

function BodyParts() {
  const [bodyParts, setBodyParts] = useState([]);
  const [a, setA] = useState(["1", "2", "3", "4", "5"]);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cardData);
  }, []);

  const handleCard=(name)=>
  {
    console.log(name)
  }
  console.log(data)

  //CREATE STATIC DATA ARRAY WITH NAME AND IMAGE

  return (
    <div>
      {/*      
      <div className="flex flex-row">
        {
        bodyParts.map((parts) => (
          <div className="box-border h-96  w-96 p-4 m-4   border-4 mt-20">
            <h1 className="h-10 font-semibold"> {parts.bodyPart} </h1>{" "}
            <img className="h-48 w-48 mx-14 mt-4 " src={parts.gifUrl} />{" "}
           
            <br />
            <div className="flex justify-center">
              <h4 className="mt-4 mr-4">  {parts.name} </h4>
              <button
                className="mt-2 bg-red-500  text-white border px-4 py-1 rounded"
                // onClick={() => removeFromCart(product.id)}
              >
                View 
              </button>{" "}
            </div>{" "}
           
          </div>
        ))}
      </div> */}

<div className="flex flex-row justify-center mt-8 ">
        <h1 className=" text-black md:m-10 mx-2 font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl ">EXPLORE </h1>
        <h1 className="md:mx-2  text-red-500 mx-2 md:m-10 font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl "> CATEGORIES </h1>
      </div>
      {/* <div className=" flex flex-wrap lg:m-8 md:m-4 sm:m-2 h-24 w-full"> */}

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-24  ">

      {data.map((data) => (

    <div className="box shadow-2xl p-4 m-4 hover:bg-slate-200  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400" onClick={()=>handleCard(data.name)}>
            <img className="h-96 w-96 " src={data.image} />
          
            {/* <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2> */}
            <h3 className=" text-4xl text-black text-center">{data.name}</h3>
            {/* <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
        </div>

       
      ))}

      </div>

          <div className="w-screen md:h-96 lg:h-[500px] bg-black">

              <div className="w-96 h-96 border bg-white align-center">

              </div>
          </div>
    
    </div>
  );
}

export default BodyParts;
