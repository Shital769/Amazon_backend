import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils/utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.deleteMany({}); // remove user data before cretaing new users
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(404).send({ message: "Invalid user or password" });
  })
);

export default userRouter;
