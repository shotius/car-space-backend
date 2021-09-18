import argon2 from "argon2";
import User from "../models/user";
import logger from "../utils/logger";
import express from "express";
import usersService from '../services/userService'

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  const body = req.body;

  let passwordHash;
  try {
    passwordHash = await argon2.hash(body.password);
  } catch (err) {
    return res.status(500).json({ error: "uneble to hash the password" });
  }

  const user = new User({
    username: body.username,
    name: body.name,
    role: body.role,
    passwordHash,
  });

  let savedUser;
  try {
    savedUser = await user.save();
  } catch (error: any) {
    logger.error(error.message);
  }

  return res.json(savedUser);
});

usersRouter.get("/", async (_req, res) => {
  res.json(await usersService.getUsers());
});

export default usersRouter