import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is Ready"); // send response to client
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Your Server is running at  http://localhost:${PORT} `);
});
