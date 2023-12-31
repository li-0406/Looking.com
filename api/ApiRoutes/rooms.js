import express from "express";
import {
  createRoom,
  getRoom,
  getAllRooms,
  getHotelRooms,
  updatedRoom,
  deleteRoom,
} from "../RoutesController/rooms.js";

const router = express.Router();
//創建房間
router.post("/:hotelid", createRoom);
//更改
router.put("/:id", updatedRoom);
//刪除
router.delete("/:hotelid/:id", deleteRoom);
//讀取單筆資料
router.get("/:id", getRoom);
//所有資料
router.get("/", getAllRooms);
//抓取單筆飯店的rooms所有資料
router.get("/findHotel/:hotelid", getHotelRooms);

export default router;
