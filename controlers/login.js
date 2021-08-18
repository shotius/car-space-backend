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

  const userForSession = {
    username: user.username,
    isAuthenticated: true,
    role: user.role,
    id: user._id,
  };

  req.session.user = userForSession;

  res.status(200).send({
    role: user.role.toLowerCase(),
    success: true,
  });
});

module.exports = loginRouter;
