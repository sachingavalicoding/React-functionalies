import { useState } from "react";
import Button from "../components/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
console.log(name)
  return (
    <div className="w-full min-h-screen   pt-20">
      <form className="w-[30rem] mx-auto mt-10 border-2 rounded-2xl flex  gap-4 flex-col py-4 px-2 ">
        <h2 className="text-4xl text-center font-semibold "> Sign Up </h2>
        <div className="w-full flex flex-col gap-3 px-4 py-4 ">
          <div className="row flex flex-col gap-2 ">
            <label htmlFor="name">Username</label>
            <input
              className="px-4 py-2 bg-transparent outline-2 border-[1px] border-slate-600 rounded-lg"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange= { (e) => setName(e.target.value) }
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="px-4 py-2 bg-transparent outline-2 border-[1px] border-slate-600 rounded-lg"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label htmlFor="phoneno">Phone No </label>
            <input
              className="px-4 py-2 bg-transparent outline-2 border-[1px] border-slate-600 rounded-lg"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label htmlFor="Password">Password</label>
            <input
              className="px-4 py-2 bg-transparent outline-2 border-[1px] border-slate-600 rounded-lg"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="row flex w-full items-center justify-center mt-4">
            <Button text={"Create an account"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
