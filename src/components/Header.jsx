import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from "react-date-range";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [openPeople, setopenPeople] = useState(false);
  const [conditions, setConditions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
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
  const people = [
    { name: "成人", num: conditions.adult },
    { name: "孩童", num: conditions.children },
    { name: "客房", num: conditions.room },
  ];

  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setdates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const options = [
    { value: "台北", label: "台北" },
    { value: "新北", label: "新北" },
    { value: "宜蘭", label: "宜蘭" },
  ];
  const [destination, setDestination] = useState(options[0]);

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

  const search = () => {
    navigate("/hotelsList", {
      state: { destination, conditions, dates },
    });
  };

  return (
    <div className="bg-slate-700 pb-20 relative">
      <div className="container mx-auto max-w-screen-xl pt-20">
        <h1 className="text-5xl font-bold text-gray-300">尋找下趟住宿</h1>
        <h2 className="text-2xl mt-6 text-gray-300">
          搜尋飯店、民宿及其他住宿類型的優惠…
        </h2>
        <div className="container mx-auto max-w-screen-xl rounded-md bg-yellow-700 absolute -bottom-6  p-1 flex gap-1 j">
          <div className="bg-gray-800  rounded-md pl-4 flex-1 flex items-center">
            <FontAwesomeIcon icon={faBed} className=" text-gray-400" />
            <Select
              defaultValue={destination}
              className="w-full px-3"
              options={options}
              styles={selectStyle}
              onChange={setDestination}
            />
          </div>
          <div className="bg-gray-800 rounded-md pl-4 flex-1 relative flex items-center">
            <FontAwesomeIcon icon={faCalendar} className=" text-gray-400" />
            <input
              readOnly
              className="bg-gray-800 focus:outline-0 rounded p-3 w-full cursor-pointer"
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
          <div className="bg-gray-800 rounded-md pl-4 flex-1 flex items-center">
            <FontAwesomeIcon icon={faPeopleGroup} className=" text-gray-400" />
            <input
              readOnly
              onClick={() => setopenPeople(!openPeople)}
              className="bg-gray-800 focus:outline-0 rounded p-3 cursor-pointer w-full"
              v-model="input"
              placeholder={`${conditions.adult} 位成人 · ${conditions.children} 位小孩 · ${conditions.room} 間房`}
            />
            {openPeople && (
              <div className="bg-white shadow-md rounded-lg p-8 absolute top-15 right-20 w-[400px]">
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
            className="bg-slate-600 rounded-md px-6 text-white hover:bg-slate-700 "
            onClick={() => search()}
          >
            搜尋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
