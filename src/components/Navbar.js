import React from "react";
import Qmaker from "../qmaker.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center p-5 bg-white shadow-lg">
      <img src={Qmaker} alt="logo" className="w-16 h-16" />
    </div>
  );
};

export default Navbar;
