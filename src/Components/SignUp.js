import React, { useState } from "react";
// import sweetAlert from "sweetalert2";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";
// const Swal = require('sweetalert2')
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
// import isEmail from "validator/lib/isEmail";

// import Swal from "sweetalert2";


function SignUp() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [isEmailValidated, setEmailValidated] = useState(false);
  const [isUserValidated, setUserValidated] = useState(false);
  const [isPasswordValidated, setPasswordValidated] = useState(false);

  function loginHandle(e) {
    e.preventDefault();

    // const uppercaseRegExp = /(?=.*?[A-Z])/;
    // const lowercaseRegExp = /(?=.*?[a-z])/;
    // const digitsRegExp = /(?=.*?[0-9])/;
    // const minLengthRegExp = /.{6,}/;

    // const uppercaseUser = uppercaseRegExp.test(user);
    // const lowercaseUser = lowercaseRegExp.test(user);

    // //USER VALIDATIONS

    // if (user.length == 0) {
    //   toast.error("Invalid Username");
    //   setUserErr(" Username is empty");
    //   setUserValidated(false);
    // } else if (!uppercaseUser) {
    //   toast.error("Invalid Username");
    //   setUserErr(" Username should contain at least one Uppercase");
    //   setUserValidated(false);
    // } else if (!lowercaseUser) {
    //   toast.error("Invalid Username");
    //   setUserErr(" Username should contain at least one Lowercase");
    //   setUserValidated(false);
    // } else if (user.length < 5) {
    //   toast.error("Invalid Username");
    //   setUserErr(" Username should contain more than 5 characters");
    //   setUserValidated(false);
    // } else {
    //   setUserErr("");

    //   setUserValidated(true);
    // }

    // //EMAIL VALIDATIONS
    // if (validator.isEmail(email)) {
    //   setEmailErr("");
    //   setEmailValidated(true);
    // } else {
    //   setEmailErr("Email is not valid");
    //   toast.error("Email should be like abc@xyz.com");
    //   setEmailValidated(false);
    // }

    // //PASSWORD VALIDATIONS

    // const uppercasePassword = uppercaseRegExp.test(password);
    // const lowercasePassword = lowercaseRegExp.test(password);
    // const digitsPassword = digitsRegExp.test(password);
    // const minLengthPassword = minLengthRegExp.test(password);

    // setPassErr(" ");
    // if (password.length === 0) {
    //   toast.error("Invalid Password");
    //   setPassErr("password is empty");
    //   setPasswordValidated(false);
    // } else if (!uppercasePassword) {
    //   toast.error("Invalid Password");
    //   setPassErr(" Password should contain at least one Uppercase");
    //   setPasswordValidated(false);
    // } else if (!lowercasePassword) {
    //   toast.error("Invalid Password");
    //   setPassErr(" Password should contain at least one Lowercase");
    //   setPasswordValidated(false);
    // } else if (!digitsPassword) {
    //   toast.error("Invalid Password");
    //   setPassErr(" Password should contain at least one Digit");
    //   setPasswordValidated(false);
    // } else if (!minLengthPassword) {
    //   toast.error("Invalid Password");
    //   setPassErr(" Password should contain minumum 6 characters");
    //   setPasswordValidated(false);
    // } else {
    //   setPasswordValidated(true);
    // }

    // if (isEmailValidated && isUserValidated && isPasswordValidated) {
    //   // console.log("Everthing is cool,call the api");
    //   const RegData = {
    //     username: user,
    //     email: email,
    //     password: password,
    //   };



      
    // //   axios.post(`http://127.0.0.1:8000/api/auth/register`, RegData)
    // //     .then((jwtTokenData) => {
    // //       console.log(
    // //         " SignUp token stored in localStorage =>" + jwtTokenData.data.token
    // //       );

    // //       localStorage.setItem("SignUp",(jwtTokenData.data.token))
    // //       console.log("Details saved to localstorage");
    // //       Swal.fire({
    // //         icon: "success",
    // //         title: "Account created successfully!",
    // //       });
    // //       dispatch(createAccount(RegData))

    // //       navigate("/loginPage");

    // //       // doLogin(jwtTokenData.data.token, () => {
    // //       //   console.log("Details saved to localstorage");

    // //       //   Swal.fire({
    // //       //     icon: "success",
    // //       //     title: "Account created successfully!",
    // //       //   });
    // //       //   navigate("/loginPage");
    // //       // });
    // //     })
    // //     .catch((error) => {
    // //       console.log(error.response.data);
    // //     });
    // }
  }

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">

          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={loginHandle} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Create Account
              </h1>

              <div className="py-2 text-left">
                <input
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Username"
                />
                {<span className="text-red-500 px-2">{userErr}</span>}
                <br></br>
              </div>

              <div className="py-2 text-left">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="EmailId"
                />
                {<span className="text-red-500 px-2">{emailErr}</span>}
                <br></br>
              </div>

              <div className="py-2 text-left">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                />
                {<span className="text-red-500 px-2">{passErr}</span>}
                <br></br>
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-red-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <span>Already an account?</span>
              <NavLink
                to="/login"
                className="text-md text-indigo-600 f font-bold underline"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
