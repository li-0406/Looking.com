import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";

const Reservationbtn = ({ onClose, id }) => {
  const { data, loading, error } = useFetch(`/rooms/findHotel/${id}`);
  console.log(data);
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
              {data.map((i) => (
                <tr className="border hover:bg-gray-100" key={i._id}>
                  <td className="p-3">
                    <p>{i.title}</p>
                    <p>{i.desc}</p>
                  </td>
                  <td className="p-3">{i.maxPeople}</td>
                  <td className="p-3">TWD {i.price.toLocaleString()}</td>
                  <td className="p-3">
                    {i.roomNumbers?.map((j) => (
                      <label className="block" key={i._id}>
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
      ;
    </div>
  );
};

export default Reservationbtn;
