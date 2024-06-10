/*  Sign up => account create sign up 
     Sign in => login account 
*/
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleForm = () => {

  }


  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center">
        <form
          action=""
          className="w-[28rem] text-white mx-auto px-8 py-8 bg-black flex flex-col gap-4 "
        >
          <div className="row flex flex-col w-full gap-2">
            <label htmlFor="username">Username</label>
            <input
              className="px-2 border-[1px] border-slate-500 py-2 rounded-sm w-full bg-transparent text-pink-600"
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
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
            <Link onClick={handleForm} to={""} >
            <Button
              text="Sign up"
              classnames={
                "bg-pink-600 px-10 hover:text-white hover:border-[1px] hover:border-pink-600 "
              } 
              
            
            /></Link>
          </div>
        </form>
        <div className="flex w-96 mx0auto flex-col">
          <h1> Name : {name} </h1>
          <h1> email : {email} </h1>
          <h1> password : {password} </h1>
        </div>
      </div>
    </>
  );
};

export default Signup;
