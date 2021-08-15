const usersRouter = require("express").Router();
const argon2 = require("argon2");
const User = require("../models/user");

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
    passwordHash,
  });

  let savedUser;
  try {
      savedUser = await user.save();
  } catch (error) {
      console.log(error.message)
  }

  console.log(savedUser)

  res.json(savedUser);
});

usersRouter.get("/", async (req, res) => {
  const users = await User.find({}).populate('notes');
  res.json(users);
});

module.exports = usersRouter;
