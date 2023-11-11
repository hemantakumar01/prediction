import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[50px] border-b-2 mb-2 flex items-center justify-center">
      <ul className=" flex items-center justify-around gap-2">
        <Link to={"/"} className="text-lg font-bold p-2 bg-black text-white">
          Home
        </Link>
        <Link
          to={"/Previous"}
          className="text-lg font-bold p-2 bg-black text-white"
        >
          Previous
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
