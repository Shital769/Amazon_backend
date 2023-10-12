import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//databse connection
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/amazon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find(
//     (item) => item._id.toString() === req.params.id
//   );
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

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
