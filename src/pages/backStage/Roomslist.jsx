import React, { useEffect, useState } from "react";
import Sidebar from "../../components/backstage/Sidebar";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditRoom from "../../components/backstage/EditRoom";
const Backstage = () => {
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/rooms/findHotel/${id}`);
        const hotel = await axios.get(`/hotels/find/${id}`);
        setRooms(res.data);
        setHotel(hotel.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [editTf, setEditTf] = useState(false);
  const [editDetail, setEditDetail] = useState({});
  const openEdit = (i) => {
    setEditDetail(i);
    setEditTf(true);
  };

  const handleClose = () => {
    setEditTf(false);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto max-w-screen-xl pt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl mt-3 mb-10">
            {hotel.name} <span className="text-2xl">房型分頁</span>
          </h1>
          <button className="border border-orange-500 p-3 bg-orange-500 rounded-lg hover:bg-transparent ease-in-out duration-200">
            新增房型
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th>房型名稱</th>
              <th>規格</th>
              <th>價格</th>
              <th>適合人數</th>
              <th>房型編號</th>
              <th>房型 ID</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {rooms.map((i) => (
              <tr>
                <td>{i.title}</td>
                <td>{i.desc}</td>
                <td>{i.price.toLocaleString()}</td>
                <td>{i.maxPeople}</td>
                <td>
                  {i.roomNumbers.map((num) => (
                    <p>{num.number}</p>
                  ))}
                </td>
                <td>{i._id}</td>
                <td className="p-5">
                  <FontAwesomeIcon
                    className="text-2xl hover:text-blue-600 ease-in-out duration-200 cursor-pointer"
                    icon={faPenToSquare}
                    onClick={() => openEdit(i)}
                  />
                </td>
                <td>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-2xl hover:text-red-500 ease-in-out duration-200"
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditRoom open={editTf} handleClose={handleClose} data={editDetail} />
    </div>
  );
};

export default Backstage;
