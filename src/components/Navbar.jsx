import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faToriiGate,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const tag = [
    { icon: faBed, name: "住宿" },
    { icon: faPlane, name: "航班" },
    { icon: faCar, name: "租車" },
    { icon: faToriiGate, name: "景點/活動" },
    { icon: faTaxi, name: "機場計程車" },
  ];
  const [tagActive, setTagActive] = useState("住宿");
  return (
    <div className="bg-slate-700 pt-5">
      <div className="container mx-auto max-w-screen-xl">
        <div className="lineOne flex justify-between items-center">
          <div className="left">
            <span className="text-2xl font-bold cursor-pointer text-slate-100">
              Looking.com
            </span>
          </div>
          <div className="right flex items-center">
            <span className="text-white text-lg  mr-6">TWD</span>
            <button className="w-6 h-6 rounded-full bg-cover bg-center bg-flag  mr-10 "></button>
            <button className="px-3 py-1 border border-white border-opacity-50 rounded-lg mr-3  text-white hover:bg-opacity-20 hover:bg-white">
              註冊
            </button>
            <button className="px-3 py-1 border border-white border-opacity-50 rounded-lg  text-white hover:bg-opacity-20 hover:bg-white">
              登入
            </button>
          </div>
        </div>
        <div className="lineTwo flex gap-7 mt-5 ">
          {tag.map((item) => (
            <div
              className={`px-4 py-2 text-white rounded-full cursor-pointer  hover:bg-opacity-10 hover:bg-white ${
                tagActive === item.name
                  ? "border border-white bg-white bg-opacity-10"
                  : ""
              }`}
              key={item.name}
              onClick={() => setTagActive(item.name)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="ml-2">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
