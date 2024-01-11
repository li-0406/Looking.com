import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import format from "date-fns/format";
import { OptionsContext } from "./context/OptionsContext.js";
import { motion } from "framer-motion";
const Reservationbtn = ({ onClose, id, night }) => {
  const { data, loading, error } = useFetch(`/rooms/findHotel/${id}`);
  const { city, date, options, dispatch } = useContext(OptionsContext);

  return (
    <div className="fixed w-full h-screen z-50 bg-black/50 flex justify-center items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="container max-w-screen-lg">
          <div className="bg-slate-300 flex justify-between p-3 rounded-t-xl">
            <h1 className="text-2xl">空房情況</h1>
            <h2>
              {`${format(date[0].startDate, "yyyy-MM-dd")} - ${format(
                date[0].endDate,
                "yyyy-MM-dd"
              )}`}{" "}
              {options.adult} 位大人
              {options.children !== 0 && `、${options.children} 位小孩`} 入住
              {night} 晚
            </h2>
            <span className="text-xl cursor-pointer" onClick={onClose}>
              關閉 <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </span>
          </div>
          <div className="bg-white">
            <table className="w-full ">
              <thead>
                <tr>
                  <th className="p-3">客房類型</th>
                  <th className="p-3">適合人數</th>
                  <th className="p-3">房型今日價格</th>
                  <th className="p-3">住宿總價格</th>
                  <th className="p-3">選擇房型編號</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((i, index) => (
                  <tr className="border hover:bg-gray-100" key={index}>
                    <td className="p-3">
                      <p>{i.title}</p>
                      <p>{i.desc}</p>
                    </td>
                    <td className="p-3">{i.maxPeople}</td>
                    <td className="p-3">TWD {i.price.toLocaleString()}</td>
                    <td className="p-3">
                      TWD {(i.price * night).toLocaleString()}
                    </td>
                    <td className="p-3">
                      {i.roomNumbers?.map((j, index) => (
                        <label className="block" key={index}>
                          <input type="checkbox" value={i._id} />
                          {j.number}
                        </label>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center">
              <button className="p-3 border rounded-lg m-3">現在預訂</button>
            </div>
          </div>
        </div>
      </motion.div>
      ;
    </div>
  );
};

export default Reservationbtn;
