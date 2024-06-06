import logo from "/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { navItems } from "../data/data";
import Button from "./Button"
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="w-full flex items-center fixed top-0 left-0 px-14 bg-transparent backdrop-blur-sm">
      <div className="container flex items-center justify-between  mx-auto ">
        <div className="flex items-center gap-2">
          <img className="w-14" src={logo} alt="logo" />
          <h2> VirtualR </h2>
        </div>

        <div className="flex xl:hidden">
          {navOpen ? (
            <IoClose
              onClick={() => setNavOpen((prev) => !prev)}
              className="text-3xl "
            />
          ) : (
            <RiMenu3Line
              onClick={() => setNavOpen((prev) => !prev)}
              className="text-3xl "
            />
          )}
        </div>

        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((ele, index) => (
            <a key={index} href={ele.href}>
              {" "}
              {ele.label}{" "}
            </a>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-8">
          <Button text={"Sign in "} />
          <Button
            text={"Create an account "}
            classname={"bg-mainColor border-transparent"}
          />
        </div>

        {/*  Small device navbar  */}
        <div
          className={` ${
            navOpen ? "flex" : "hidden"
          } w-full fixed top-16 left-0 flex xl:hidden flex-col items-center justify-center `}
        >
          {navItems.map((ele, index) => (
            <a
              className="w-full text-center px-4 py-3 bg-black hover:bg-slate-50 duration-300 hover:text-orange-500"
              key={index}
              href={ele.href}
            >
              {" "}
              {ele.label}{" "}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
