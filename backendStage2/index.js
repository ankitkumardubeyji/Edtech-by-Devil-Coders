import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./Route/useroute.js";
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7050;
const URL = process.env.MONGOURL;
const DB = mongoose.connect(URL).then(() => {
  console.log("mongodb connect");

  app.listen(8050, () => {
    console.log("server is running on 8050");
  });
});
app.use("/api", route);
