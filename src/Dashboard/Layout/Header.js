import React from "react";
import Avatar from "@mui/material/Avatar";
import img2 from "../../assets/asset 1.jpeg";
import { deepOrange, deepPurple } from "@mui/material/colors";

function Header() {
  return (
    <div className="h-[40%] w-full flex ">
      <div className="h-full w-[60%] flex justify-center items-center ">
        <div className="h-[90%] w-[95%] bg-white rounded-2xl flex flex-col ">
          <div className="h-[20%] w-full  flex justify-start items-center">
            <h2 className="pl-8 text-xl">Welcome! kumar</h2>
          </div>
          <div className="h-[60%] w-full flex">
            <div className="h-full w-[70%] flex justify-start items-center">
              <h2 className="text-start text-lg text-gray-400 pl-5">
                Unlock the world of oppoturnities with mycareerpathshala
                <br />
                and find your dream destination to study abroad
              </h2>
            </div>
            <div className="h-full w-[30%] bg-pink-800">
              <img src={img2} className="h-full w-full" />
            </div>
          </div>
          <div className="h-[20%] w-full flex relative justify-start items-center">
            <div className="h-[70%] w-[40%] absolute left-5 bg-[#3e53a0] rounded-2xl flex justify-center items-center">
              <h2 className="text-lg text-white">
                Request your career counsellor
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[40%] flex justify-center items-center ">
        <div className="h-[90%] w-[97%] bg-white rounded-2xl flex flex-col">
          <div className="h-[20%] w-[full] flex justify-start items-center">
            <h2 className="pl-5 text-xl">Build tomorrow using technology</h2>
          </div>
          <div className="h-[40%] w-full  flex justify-center items-center">
            <div className="h-[60%] w-[70%] rounded-3xl relative bg-[#d8ddec]">
              <Avatar
                className="absolute top-3 left-4"
                sx={{ bgcolor: deepPurple[400] }}
              >
                N
              </Avatar>
              <h2 className="absolute text-blue-800 left-[25%] bottom-4 font-bold">
                NEET counselling
              </h2>
            </div>
          </div>

          <div className="h-[40%] w-full  flex justify-center items-center">
            <div className="h-[60%] w-[70%] rounded-3xl relative bg-[#fff3e8]">
              <Avatar
                className="absolute top-3 left-4"
                sx={{ bgcolor: deepOrange[600] }}
              >
                E
              </Avatar>
              <h2 className="absolute text-orange-600 left-[25%] bottom-4 font-bold">
                Events
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
