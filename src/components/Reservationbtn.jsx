import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { OptionsContext } from "./context/OptionsContext.js";
import { LoginContext } from "./context/LoginContext.js";
import axios from "axios";
import useCreateOrder from "../hooks/useCreateOrder.js";

const Reservationbtn = ({ onClose, id }) => {
  const { data, loading, error } = useFetch(`/rooms/findHotel/${id}`);

  const { date, options } = useContext(OptionsContext);
  const { user } = useContext(LoginContext);

  const [roomNumber, setRoomNumber] = useState([]);
  const [orderData, setOrderData] = useState({
    userID: user._id,
    hotelId: id,
    RoomNumberId: [],
    ReservationDates: [
      {
        startDate: date[0].startDate,
        endDate: date[0].endDate,
      },
    ],
    totalPrice: 1,
    options: {
      adult: options.adult,
      children: options.children,
      rooms: options.room,
    },
  });

  const handleCheckBox = (e) => {
    setRoomNumber(
      e.target.checked
        ? [...roomNumber, e.target.value]
        : roomNumber.filter((i) => i !== e.target.value)
    );
  };

  const [createOrderState, setCreateOrderState] = useState(false);
  const { order } = useCreateOrder("/order", orderData, createOrderState);
  const handleClick = async () => {
    try {
      await setOrderData((item) => ({ ...item, RoomNumberId: roomNumber }));
      setCreateOrderState(true);
      console.log(order);
    } catch (error) {
      console.log("訂單或是住宿日期上傳失敗");
    }
  };
  return (
    <div className="fixed w-full h-screen z-50 bg-black/50 flex justify-center items-center">
      <div className="container max-w-screen-lg">
        <div className="bg-slate-300 flex justify-between p-3 rounded-t-xl">
          <h1 className="text-2xl">空房情況</h1>
          <h2>幾號幾號幾晚 大人小孩 </h2>
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
                    {i.roomNumbers?.map((j, index) => (
                      <label className="block" key={index}>
                        <input
                          type="checkbox"
                          value={j._id}
                          onChange={handleCheckBox}
                        />
                        {j.number}
                      </label>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center">
            <button
              disabled={roomNumber.length == 0}
              className={`p-3 border rounded-lg m-3 ${
                roomNumber.length == 0 ? "cursor-not-allowed" : ""
              }`}
              onClick={handleClick}
            >
              現在預訂
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Reservationbtn;
