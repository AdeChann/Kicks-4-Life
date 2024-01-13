import logo from "../../assets/images/pngegg.png";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" bg-putih font-fontCustoms flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4:">
      <h1 className="w-full text-3xl font-bold text-semiOren px-9 py-4 cursor-pointer ">
        Kick 4 life
      </h1>

      {/* <img src={logo} className="w-full h-24 pr-8 mr-11" /> */}

      <ul className="hidden sm:flex mr-8 text-lg mx-auto">
        <li className="p-4 mr-5 hover:text-semiOren hover:border-b-2 hover:border-semiHijau transition duration-300 ease-in-out">
          Home
        </li>
        <li className="p-4 mr-5 hover:text-semiOren hover:border-b-2 hover:border-semiHijau transition duration-300 ease-in-out">
          Products
        </li>
        <li className="p-4 mr-5 hover:text-semiOren hover:border-b-2 hover:border-semiHijau transition duration-300 ease-in-oute">
          Services
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden pr-5">
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-semiHijau bg-oren ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-semiHijau m-4 px-9 py-4">
          Kick 4 life
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Products</li>
          <li className="p-4">Services</li>
          <li className="p-4">AboutMe</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
