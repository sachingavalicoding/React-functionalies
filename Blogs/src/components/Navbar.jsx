import { navItems } from "../data/data";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FaCircleUser, FaCartPlus } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [navOpen , setNavOpen] = useState(false);
  return (
    <header className="w-full z-10 fixed top-0 left-0 bg-white flex items-center   py-3 shadow-xl">
      <div className="flex   container mx-auto px-4 lg:max-w-[1080px] justify-between gap-20 lg:gap-32  items-center">
        <div className="">
          <h3 className="px-4 py-2  border-2 border-slate-900 "> SHOPMAX </h3>
        </div>
        <nav className="hidden lg:flex gap-12">
          {navItems.map(({ label, href }, index) => (
            <Link key={index} to={href}>
              {" "}
              {label}{" "}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 text-xl  ">
          <FcSearch />
          <Link to={"/signup"}> <FaCircleUser  /></Link>
          <FaCartPlus />
          <RiMenu3Line className="flex lg:hidden" onClick={() => setNavOpen((prev) => !prev ) } />
        </div>
        {/* Side bar  */}
        <div className=  {` ${navOpen ? "block" :"hidden"} w-96 h-screen fixed top-0 right-0 bg-white px-6 py-8 ">
          <div className="flex items-center justify-between px-6> `} > 
          <div className="flex items-center justify-between px-6">
            <h2 className="text-4xl font-extrabold"> SHOPMAX </h2>
            <MdCancel className="text-2xl " onClick={() => setNavOpen((prev) => !prev )} />
          </div>
          <nav className="flex gap-8 flex-col px-6 mt-12 ">
            {navItems.map(({ label, href }, index) => (
              <Link key={index} to={href}>
                {" "}
                {label}{" "}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
