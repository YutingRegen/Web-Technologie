import http from "http";
import express from "express";
import fs from "fs";
import cors from "cors";


const app = express();
app.server = http.createServer(app);
app.use(cors());

// 静态托管 client 文件夹
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.get("/wetterdaten/temperatur", (req, res) => {
  fs.readFile("./server/temperatur_stuendlich.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data file.");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.get("/wetterdaten/wolkenbedeckung", (req, res) => {
  fs.readFile("./server/wolkenbedeckung_stuendlich.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data file.");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.listen(3001, () => {
  console.log(`Server started: http://localhost:3001`);
});
