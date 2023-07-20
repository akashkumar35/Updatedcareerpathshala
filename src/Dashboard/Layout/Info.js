import React from "react";
import Avatar from "@mui/material/Avatar";
import img1 from "../../assets/asset 0.webp";
import TextField from "@mui/material/TextField";
import { PieChart, Pie } from "recharts";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function Info() {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="h-[65%] w-full flex ">
      <div className="h-full w-[28%] flex justify-center items-center">
        <div className="h-[97%] w-[97%] flex flex-col bg-white rounded-2xl">
          <div className="h-[12%] w-[full] flex justify-start items-center">
            <h2 className="pl-8 text-xl">Edit info</h2>
          </div>
          <div className="h-[75%] w-[full] flex flex-col">
            <div className="h-[40%] w-full  flex justify-center items-center">
              <Avatar
                alt="Travis Howard"
                sx={{ width: 100, height: 100 }}
                src={img1}
              />
            </div>
            <div className="h-[60%] w-full flex flex-col">
              <div className="h-[33%] w-full flex justify-center items-center">
                <TextField
                  id="outlined-basic"
                  className="w-[70%]"
                  size="small"
                  label="Name"
                  variant="outlined"
                />
              </div>
              <div className="h-[33%] w-full  flex justify-center items-center">
                <TextField
                  id="outlined-basic"
                  className="w-[70%]"
                  size="small"
                  label="Email"
                  variant="outlined"
                />
              </div>
              <div className="h-[33%] w-full  flex justify-center items-center">
                <TextField
                  id="outlined-basic"
                  className="w-[70%]"
                  size="small"
                  label="Phone"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="h-[13%] w-[full] flex justify-center items-center ">
            <div className="h-[65%] w-[70%] bg-[#c42d28] rounded-3xl flex justify-center items-center">
              <h2 className="text-white">20% profile completed</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[72%]  flex justify-center items-center">
        <div className="h-[97%] w-[97%] bg-white rounded-2xl flex ">
          <div className="h-full w-[60%] flex justify-center items-center">
            <BarChart width={580} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="h-full w-[40%]  flex justify-center items-center">
            <PieChart width={1000} height={500}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
