import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteDialog = ({ open, handleClose, data }) => {
  console.log(data);
  const [newData, setNewData] = useState({
    name: data.name,
    type: data.type,
    city: data.city,
    address: data.address,
    distance: data.distance,
    photos: data.photos?.[0],
    title: data.title,
    desc: data.desc,
    rating: data.rating,
    cheapestPrice: data.cheapestPrice,
    popularHotel: data.popularHotel,
    comments: data.comments,
  });
  console.log(newData);
  const handleInputChange = (e) => {
    console.log(e.target.id);
    const name = e.target.id;
    setNewData({ ...newData, [name]: e.target.value });
  };
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
              defaultValue={newData.popularHotel}
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
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button autoFocus>送出</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
