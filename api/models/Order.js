import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, //紀錄誰下這個訂單的
    hotelId: { type: String, required: true }, //紀錄這個訂單的飯店編號
    //一次紀錄一個訂房的房間，但可以一次下訂許多的房間
    RoomNumberId: [
      {
        //紀錄這個訂單的房間編號
        type: String,
        required: true,
      },
    ],
    ReservationDates: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    totalPrice: { type: Number, required: true }, //總共下訂金額
    status: { type: String, default: "待確認訂單" }, //這個是給後台看得狀態讓之後訂單好管理
    options: [
      {
        //條件設置就紀錄我們的人數條件
        adult: { type: Number, default: 1 },
        children: { type: Number, default: 0 },
        rooms: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Order", OrderSchema);
