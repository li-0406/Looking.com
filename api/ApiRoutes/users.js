import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users.js");
});

export default router;
