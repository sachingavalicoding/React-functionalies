/*  Sign up => account create sign up 
     Sign in => login account 
*/
import { Link } from "react-router-dom";

import { useState } from "react";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center">
        <form
          action=""
          className="w-[28rem] text-white mx-auto px-8 py-8 bg-black rounded-s-sm flex flex-col gap-4 "
        >
          <div className="row w-full text-center text-2xl text-white">
            <h2> Login  </h2>
          </div>
          
          <div className="row flex flex-col w-full gap-2 ">
            <label htmlFor="email">Email</label>
            <input
              className="px-2 border-[1px] border-slate-500  py-2 rounded-sm w-full bg-transparent text-pink-600"
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="row flex flex-col w-full gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="px-2 border-[1px] border-slate-500 py-2 rounded-sm w-full bg-transparent text-pink-600"
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="row flex items-center justify-center mt-8  flex-col w-full gap-2">
           
          <button className=" py-2 rounded-sm border-[1px] border-transparent  text-slate-100 duration-300 ease-in  bg-pink-600 px-10 hover:text-white hover:border-[1px] hover:border-pink-600">  <Link  to={"/"} > Sign in  </Link> </button>
          </div>
        </form>
       
      </div>
    </>
  );
};

export default Signin;
