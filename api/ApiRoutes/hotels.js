import express from "express";
import {
  createHotel,
  getHotel,
  updatedHotel,
  deleteHotel,
  getAllHotels,
} from "../RoutesController/hotels.js";
import { verifyAdmin } from "../JWT_Token.js";

const router = express.Router();

//創建資料
router.post("/", verifyAdmin, createHotel);

//拿單筆資料
router.get("/find/:id", getHotel);

//修改
router.put("/:id", updatedHotel);

//刪除
router.delete("/:id", verifyAdmin, deleteHotel);

//所有飯店
router.get("/", getAllHotels);

export default router;
