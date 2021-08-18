const usersRouter = require("express").Router();
const argon2 = require("argon2");
const User = require("../models/user");
const logger = require("../utils/logger")

usersRouter.post("/", async (req, res) => {
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
  } catch (error) {
    logger.error(error.message);
  }

  res.json(savedUser);
});

usersRouter.get("/", async (req, res) => {
  const users = await User.find({})
  res.json(users);
});

module.exports = usersRouter;
