import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from "react-date-range";
import Select from "react-select";
import { area } from "../hooks/search.js";
const HotelsList = () => {
  const location = useLocation();
  console.log(location.state);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openPeople, setopenPeople] = useState(false);

  const [dates, setdates] = useState(location.state.dates);
  const [conditions, setConditions] = useState(location.state.conditions);
  const [destination, setDestination] = useState(location.state.destination);
  const [lowPrice, setLowPrice] = useState(0);
  const [hightPrice, setHightPrice] = useState(5000);
  const people = [
    { name: "成人", num: conditions.adult },
    { name: "孩童", num: conditions.children },
    { name: "客房", num: conditions.room },
  ];

  const handleCounter = (item, icon) => {
    setConditions((prev) => {
      switch (true) {
        case item.name === "成人":
          return {
            ...prev,
            adult: icon === "plus" ? prev.adult + 1 : prev.adult - 1,
          };
        case item.name === "孩童":
          return {
            ...prev,
            children: icon === "plus" ? prev.children + 1 : prev.children - 1,
          };
        case item.name === "客房":
          return {
            ...prev,
            room: icon === "plus" ? prev.room + 1 : prev.room - 1,
          };
        default:
          return prev;
      }
    });
  };
  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "bg-gray-800",
      borderColor: "gray",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: "white", // 设置选中项字体颜色
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "lightblue" : "white",
      ":hover": {
        backgroundColor: "lightblue",
      },
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: "gray", // 设置输入文本颜色
    }),
  };

  //搜尋
  const search = () => {
    console.log(destination, dates, lowPrice, hightPrice, conditions);
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl  pt-20">
        <div className="grid grid-cols-4 gap-9">
          <div>
            <div className="bg-orange-400 p-6">
              <p>目的地/住宿名稱</p>
              <Select
                defaultValue={destination ? destination : "要去哪裡?"}
                className="w-full"
                options={area}
                styles={selectStyle}
                onChange={setDestination}
              />
              <p className="mt-4">入住/退房日期</p>
              <div className="relative">
                <input
                  type="text"
                  className="p-2 w-full "
                  placeholder={`${format(
                    dates[0].startDate,
                    "yyyy-MM-dd"
                  )} - ${format(dates[0].endDate, "yyyy-MM-dd")}`}
                  onClick={() => setOpenCalendar(!openCalendar)}
                />
                {openCalendar && (
                  <DateRange
                    className="absolute -left-15 top-13 z-40"
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={dates}
                    locale={locales["zhTW"]}
                    onChange={(item) => setdates([item.selection])}
                  />
                )}
              </div>
              <p className="mt-4">每晚最低價格</p>
              <input
                type="text"
                className="p-2 w-full"
                placeholder={lowPrice}
                onChange={(e) => setLowPrice(e.target.value)}
              />
              <p className="mt-4">每晚最高價格</p>
              <input
                type="text"
                className="p-2 w-full"
                placeholder={hightPrice}
                onChange={(e) => setHightPrice(e.target.value)}
              />
              <div className="relative">
                <input
                  className="block p-2 w-full mt-4"
                  type="text"
                  placeholder={`${conditions.adult} 位成人 · ${conditions.children} 位小孩 · ${conditions.room} 間房`}
                  readOnly
                  onClick={() => setopenPeople(!openPeople)}
                />
                {openPeople && (
                  <div className="bg-green-400 shadow-md rounded-lg p-8 absolute top-12 -left-15 w-[400px]">
                    {people.map((i, index) => (
                      <div
                        className=" flex items-center justify-between"
                        key={i.name}
                      >
                        <span>{i.name}</span>
                        <div
                          className={`border rounded-lg p-2 flex gap-4  ${
                            index === 1 ? "my-2" : ""
                          }`}
                        >
                          <button
                            onClick={() => handleCounter(i, "minus")}
                            disabled={i.num === 0}
                            className={`cursor-pointer ${
                              i.num === 0 ? "cursor-not-allowed opacity-50" : ""
                            }`}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="mx-4">{i.num}</span>
                          <button onClick={() => handleCounter(i, "plus")}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="block bg-orange-200 w-full p-2 mt-3 rounded-md"
                onClick={search}
              >
                搜尋
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="text-2xl mb-6">台北：找到 283 間住宿</h1>

            <div className="flex gap-6 border p-5 rounded-xl">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/222597628.webp?k=30161b6d16aad3a7aeb6ca67cf62785f68a6bc3342eab3563099ba242ad5702b&o="
                alt=""
                className="w-[30%] h-[30%] rounded-xl"
              />
              <div>
                <h2 className="text-3xl">Hotel PaPa Whale</h2>
                <p className="mt-3">萬華區 , 台北．距中心1.3公里</p>
                <div className="mt-10 border-l-2 pl-3">
                  <p>精緻雙床房</p>
                  <p>2張單人床</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between items-end">
                <div className="flex">
                  <div>
                    <p className="text-right">非常好</p>
                    <p className="text-gray-400">6992則評論</p>
                  </div>
                  <div className="bg-slate-300 flex items-center p-3 rounded-xl ml-2">
                    <span className="text-xl">8.3</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">1 晚、2 位成人</p>
                  <p className="text-2xl my-1">TWD 1,878</p>
                  <p className="text-gray-400">含稅費與其他費用</p>
                  <Link
                    to="/hotel/123"
                    className="bg-slate-500 py-3 px-6 rounded-xl mt-3 block"
                  >
                    查看客房供應情況
                    <FontAwesomeIcon icon={faChevronRight} className="ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
