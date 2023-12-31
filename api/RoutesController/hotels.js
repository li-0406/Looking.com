import Hotel from "../models/Hotel.js";
import { errorMessage } from "../errorMessage.js";

//創建
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(errorMessage(500, "資料上傳錯誤請確認格式", error));
  }
};
//拿資料
export const getHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const getHotel = await Hotel.findById(id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};
//更新
export const updatedHotel = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
//刪除
export const deleteHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("刪除資料成功");
  } catch (error) {
    next(error);
  }
};

//所有飯店
export const getAllHotels = async (req, res, next) => {
  try {
    const hotelsList = await Hotel.find();
    res.status(200).json(hotelsList);
  } catch (error) {
    next(errorMessage(500, "無法抓取所有飯店資料", error));
  }
};
