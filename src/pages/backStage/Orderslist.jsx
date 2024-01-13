import React, { useState } from "react";
import Sidebar from "../../components/backstage/Sidebar";
import Navbar from "../../components/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Backstage = () => {
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch("/order", refresh);

  const deleteOrder = async (id) => {
    await axios.delete(`order/${id}`);
    setRefresh(!refresh);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto max-w-screen-xl pt-10">
        <h2 className="text-xl">管理列表</h2>
        <h1 className="text-3xl my-3">訂單分頁</h1>
        <table className="w-full ">
          <thead>
            <tr>
              <th>飯店照片</th>
              <th>房型名稱</th>
              <th>住宿日期</th>
              <th>用戶名</th>
              <th>總價格</th>
              <th>訂單狀態</th>
              <th>訂單 ID</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((i) => (
              <tr key={i._id}>
                <td className="w-[20%] p-3">
                  <img src={i.RoomPic} alt="" className="rounded-md" />
                </td>
                <td>
                  {i.RoomTitle.map((i) => (
                    <p key={i}>{i}</p>
                  ))}
                </td>
                <td>
                  {`${new Date(
                    i.ReservationDates[0].startDate
                  ).toLocaleDateString()} ~ ${new Date(
                    i.ReservationDates[0].endDate
                  ).toLocaleDateString()}`}
                </td>
                <td>{i.userName}</td>
                <td>{i.totalPrice}</td>
                <td>{i.status}</td>
                <td>{i._id}</td>
                <td>
                  <span
                    onClick={() => deleteOrder(i._id)}
                    className="cursor-pointer"
                  >
                    刪除
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backstage;
