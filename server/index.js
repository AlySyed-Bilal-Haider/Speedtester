import * as Speedtest from "./Controller/Speed.js";
import cors from "cors";
import express from "express";
const port = process.env.PORT || 8080;
const app = express();
app.use(cors(""));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.post("/speedtest", Speedtest.speedchecker);
app.get("/downloadspeed", Speedtest.getDownloadSpeed);
app.get("/uploadspeed", Speedtest.getNetworkUploadSpeed);
app.listen(port, (req, res) => {
  console.log("server start");
});
