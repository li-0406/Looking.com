import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./home.scss";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from "react-date-range";

const Home = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setdates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div
      className="home bg-gray-800"
      onClick={() => (openCalendar ? setOpenCalendar(!openCalendar) : "")}
    >
      <Navbar />
      <Header />
      <div className="container mx-auto max-w-screen-xl rounded-md bg-yellow-700 p-1 flex gap-1 relative bottom-7">
        <div className="bg-gray-800  rounded-md pl-4 flex-1 flex items-center">
          <FontAwesomeIcon icon={faBed} className=" text-gray-400" />
          <input
            className="bg-gray-800 focus:outline-0 rounded p-3 w-full text-white"
            v-model="input"
            placeholder="你要去哪裡？"
          />
        </div>
        <div className="bg-gray-800 rounded-md pl-4 flex-1 relative flex items-center">
          <FontAwesomeIcon icon={faCalendar} className=" text-gray-400" />
          <input
            className="bg-gray-800 focus:outline-0 rounded p-3 w-full"
            v-model="input"
            placeholder={`${format(
              dates[0].startDate,
              "yyyy / MM月 / dd日"
            )} - ${format(dates[0].endDate, "yyyy / MM月 / dd日")}`}
            onClick={() => setOpenCalendar(!openCalendar)}
          />
          {openCalendar && (
            <DateRange
              className="absolute left-1 top-13"
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={dates}
              locale={locales["zhTW"]}
              onChange={(item) => setdates([item.selection])}
            />
          )}
        </div>

        <div className="bg-gray-800 rounded-md pl-4 flex-1">
          <FontAwesomeIcon icon={faPeopleGroup} className=" text-gray-400" />
          <input
            className="bg-gray-800 focus:outline-0 rounded p-3"
            v-model="input"
            placeholder="3位成人 · 2 位小孩 · 1 間房"
          />
        </div>
        <button className="bg-slate-600 rounded-md px-6 text-white hover:bg-slate-700 ">
          搜尋
        </button>
      </div>
    </div>
  );
};

export default Home;
