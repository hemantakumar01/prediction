import React from "react";
import PushRawArray from "./PushRawArray";
import SendMaildaily from "./SendMaildaily";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[50px] border-b-2 mb-2 flex items-center justify-center shadow-xl">
      <ul className=" flex items-center justify-around gap-2">
        <PushRawArray disable={true} />

        <Link to={"/"} className="text-lg font-bold p-2  text-black">
          Home
        </Link>
        <Link to={"/Previous"} className="text-lg font-bold p-2 text-black ">
          Previous
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
