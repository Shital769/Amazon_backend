import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();
//databse connection
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/amazon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(
    (item) => item._id.toString() === req.params.id
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is Ready"); // send response to client
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Your Server is running at  http://localhost:${PORT} `);
});
