const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (req, res) => {
  const body = req.body;

  const user = await User.findOne({ username: body.username });

  const passwordIsCorrect =
    user === null
      ? null
      : await argon2.verify(user.passwordHash, body.password);

  if (!(user && passwordIsCorrect)) {
    return res.status(401).json({ error: "invalid password or username" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({
    token,
    username: user.username,
    name: user.name,
  });
});

module.exports = loginRouter;
