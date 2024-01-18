import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Toast from "../Toast";
const DeleteDialog = ({ open, handleClose, data, refresh, setRefresh }) => {
  const [newData, setNewData] = useState(data);
  const [toastTf, setToastTf] = useState(false);
  useEffect(() => {
    setNewData(data);
  }, [data]);
  console.log(newData);
  const handleInputChange = (e) => {
    console.log(e.target.id);
    const name = e.target.id;
    setNewData({ ...newData, [name]: e.target.value });
  };

  const send = async () => {
    const res = await axios.put(`hotels/${newData._id}`, newData);
    if (res.status === 200) {
      setToastTf(true);
      setTimeout(() => {
        setToastTf(false);
        handleClose();
        setRefresh(!refresh);
      }, 2000);
    }
    console.log(res);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title">{"編輯"}</DialogTitle>
      <DialogContent>
        <div className="p-4">
          <DialogContentText id="alert-dialog-description">
            <label htmlFor="name" className="block text-md font-medium ">
              飯店名稱
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="type" className="block text-md font-medium ">
              飯店種類
            </label>
            <select
              id="popularHotel"
              className="text-xl bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={handleInputChange}
              defaultValue={newData.popularHotel}
            >
              <option value="飯店">飯店</option>
              <option value="公寓">公寓</option>
              <option value="渡假村">渡假村</option>
              <option value="Villa">Villa</option>
            </select>

            <label htmlFor="city" className="block text-md font-medium ">
              城市
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border  text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.city}
              onChange={handleInputChange}
            />
            <label htmlFor="address" className="block text-md font-medium ">
              地址
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border  text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.address}
              onChange={handleInputChange}
            />
            <label
              htmlFor="popularHotel"
              className="block text-md font-medium "
            >
              是否熱門
            </label>
            <select
              id="popularHotel"
              className="text-xl bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={handleInputChange}
              defaultValue={newData.popularHotel ? "true" : "false"}
            >
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
            <label htmlFor="rating" className="block text-md font-medium ">
              評分
            </label>
            <input
              type="number"
              id="rating"
              className="bg-gray-50 border  text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.rating}
              onChange={handleInputChange}
            />
            <label htmlFor="desc" className="block text-md font-medium ">
              簡介
            </label>
            <textarea
              type="text"
              id="desc"
              className="bg-gray-50 border  text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.desc}
              onChange={handleInputChange}
            />
            <label htmlFor="distance" className="block text-md font-medium ">
              標語
            </label>
            <input
              type="text"
              id="distance"
              className="bg-gray-50 border  text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.distance}
              onChange={handleInputChange}
            />
            <div className="grid grid-cols-4 gap-4">
              {newData.photos.map((i) => (
                <div>
                  <input
                    className="w-full rounded-t-lg"
                    type="text"
                    value={i}
                  />
                  <img className="rounded-b-lg" src={i} alt="" />
                </div>
              ))}
            </div>
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button autoFocus onClick={send}>
          送出
        </Button>
      </DialogActions>
      <Toast
        open={toastTf}
        handleClose={handleClose}
        text={"修改成功"}
        state={"info"}
      />
    </Dialog>
  );
};

export default DeleteDialog;
