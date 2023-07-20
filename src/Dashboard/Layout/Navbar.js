import React from "react";
import { BsBellFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="h-full w-full  flex justify-between items-center relative">
      <div className="h-[50%] w-[100px] flex justify-center items-center  absolute left-3">
        <p1 className="text-blue-800"> Home</p1>
      </div>
      <div className="h-[50%] w-[200px] flex right-8 items-center absolute">
        <BsBellFill className="text-2xl absolute left-4" />
        <h2 className="absolute left-[30%] text-blue-800">Logout</h2>
      </div>
    </div>
  );
}

export default Navbar;
