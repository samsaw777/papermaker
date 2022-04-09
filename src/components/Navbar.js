import React from "react";
import Qmaker from "../qmaker.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center p-5 bg-[#A9ACEE] shadow-xl">
      <img src={Qmaker} alt="logo" className="w-24 h-20" />
    </div>
  );
};

export default Navbar;
