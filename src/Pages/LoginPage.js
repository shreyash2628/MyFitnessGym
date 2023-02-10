import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function LoginPage() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    
  const [correctUser, setCorrectUser] = useState(false);
  const [userErrMsg, setUserErrMsg] = useState("");

  const [correctPass, setCorrectPass] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState("");
  

    const loginHandle=()=>{

    }
  return (
    <div>
         <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={loginHandle} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                LOG IN
              </h1>

              <div className="py-2 text-left">
                <input
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Username"
                />
                <br></br>
                {correctUser ? (
                  <span className="text-red-500 px-2">{userErrMsg}</span>
                ) : (
                  ""
                )}
              </div>
              {/* pattern="[A-Za-z]{10}"  */}

              <div className="py-2 text-left">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                />
                <br></br>
                {correctPass ? (
                  <span className="text-red-500 px-2">{passErrMsg}</span>
                ) : (
                  ""
                )}
              </div>
              {/* onClick={()=>loginHandle} */}
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-red-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-600"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <span>Dont have an account?</span>
              <NavLink
                to="/SignUpPage"
                className=" text-md text-indigo-600 underline font-semibold "
              >
                Create an account
              </NavLink>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage