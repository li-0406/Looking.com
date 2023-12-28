import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const port = 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("disconnected to mongoDB");
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.listen(port, () => {
  console.log(`Example app listening on ports56 ${port}`);
  console.log(process.env.MONGODB);
  connect();
});
