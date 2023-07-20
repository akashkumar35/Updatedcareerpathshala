import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import News from "./News";
import Advertisment from "./Advertisment";
import Events from "./Events";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function Home() {
  return (
    <div className="h-screen w-screen bg-[#eceef0] flex">
      <div className="h-screen w-[8%] max-w-[600px]:hidden flex justify-start items-center">
        <div className="h-[95%] w-[55%] rounded-3xl bg-[#1d5ef4] flex flex-col">
          <div className="h-[10%] w-full  flex justify-center items-center">
            <AiOutlineMenuUnfold className="text-white text-3xl" />
          </div>
          <div className="h-[10%] w-full flex justify-center items-center">
            <AiFillHome className="text-white text-3xl" />
          </div>
          <div className="h-[10%] w-full flex justify-center items-center">
            <AiOutlineUser className="text-white text-3xl" />
          </div>
        </div>
      </div>
      <div className="h-screen w-[92%] flex flex-col ">
        <div className="h-[10%] w-full ">
          <Navbar />
        </div>
        <div className="h-[90%] w-full flex flex-col  justify-center items-center relative ">
          <div className="h-full w-[90%] absolute left-8 overflow-auto ">
            <Header />
            <Info />
            <News />
            <Advertisment />
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
