import express from "express";
import {
  createHotel,
  getHotel,
  updatedHotel,
  deleteHotel,
  getAllHotels,
} from "../RoutesController/hotels.js";

const router = express.Router();

//創建資料
router.post("/", createHotel);

//拿資料
router.get("/find/:id", getHotel);

//修改
router.put("/:id", updatedHotel);

//刪除
router.delete("/:id", deleteHotel);

//所有飯店
router.get("/", getAllHotels);

export default router;
