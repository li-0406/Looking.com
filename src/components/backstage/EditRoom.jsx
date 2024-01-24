import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import axios from "axios";
import Toast from "../Toast";
const DeleteDialog = ({ open, handleClose, data, refresh, setRefresh }) => {
  const [newData, setNewData] = useState(data);
  const [toastTf, setToastTf] = useState(false);
  const [addTf, setAddTf] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [destination, setDestination] = useState(""); //地區

  const areaList = [
    { value: "台北", label: "台北" },
    { value: "台中", label: "台中" },
    { value: "蘇澳鎮", label: "蘇澳鎮" },
    { value: "台南", label: "台南" },
    { value: "高雄", label: "高雄" },
    { value: "礁溪鄉", label: "礁溪鄉" },
  ];

  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "bg-gray-800",
      borderColor: "gray",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: "white", // 字體顏色
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
      color: "gray", // 文字顏色
    }),
  };
  useEffect(() => {
    setNewData(data);
  }, [data]);
  console.log(data);
  const handleInputChange = (e) => {
    const name = e?.target?.id || e;
    if (name === "photos" && !inputValue) return;
    setNewData((prevData) => {
      if (name === "photos" && inputValue) {
        console.log(prevData?.photos);
        const updatedPhotos = prevData.photos
          ? [...prevData?.photos, inputValue]
          : [inputValue];

        setInputValue("");
        console.log(newData);
        return {
          ...prevData,
          [name]: updatedPhotos,
        };
      } else {
        return { ...prevData, [name]: e.target.value };
      }
    });
  };

  const changeArea = (e) => {
    setDestination(e.value);
    setNewData((prevData) => {
      return {
        ...prevData,
        city: e.value,
      };
    });
  };

  const deleteUrl = (url) => {
    setNewData((prevData) => {
      return {
        ...prevData,
        photos: prevData.photos.filter((i, index) => i !== url),
      };
    });
  };

  const send = async () => {
    if (data._id) {
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
    } else {
      setNewData({
        ...newData,
        type: newData.type,
        popularHotel: newData.popularHotel,
        cheapestPrice: 7903,
        comments: 463,
      });
      setAddTf(!addTf);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/hotels", newData);
        if (res.status === 200) {
          setToastTf(true);
          setTimeout(() => {
            setToastTf(false);
            handleClose();
            setRefresh(!refresh);
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [addTf]);

  const close = () => {
    handleClose();
    setNewData(data);
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
              標題
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.title}
              onChange={handleInputChange}
            />
            <label htmlFor="desc" className="block text-md font-medium ">
              規格
            </label>
            <input
              type="text"
              id="desc"
              className="bg-gray-50 border text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.desc}
              onChange={handleInputChange}
            />
            <label htmlFor="price" className="block text-md font-medium ">
              價錢
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.price}
              onChange={handleInputChange}
            />

            <label htmlFor="maxPeople" className="block text-md font-medium ">
              適合人數
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border text-xl border-gray-300 rounded-lg  block w-full p-3 mb-2"
              value={newData.maxPeople}
              onChange={handleInputChange}
            />
            {/* <Select
              defaultValue={areaList.find((i) => i.value === data.city)}
              className="w-full"
              options={areaList}
              styles={selectStyle}
              onChange={changeArea}
            /> */}
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>取消</Button>
        <Button autoFocus onClick={send}>
          {data._id ? "送出" : "創建"}
        </Button>
      </DialogActions>
      <Toast
        open={toastTf}
        handleClose={handleClose}
        text={data._id ? "修改成功" : "新增完成"}
        state={data._id ? "info" : "success"}
      />
    </Dialog>
  );
};

export default DeleteDialog;
