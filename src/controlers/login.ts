import argon2 from "argon2";
import express from 'express'
import User from "../models/user";

const loginRouter = express.Router();

loginRouter.post("/", async (req: express.Request, res: express.Response) => {
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

  req.session.user = userForSession

  return res.status(200).send({
    role: user.role.toLowerCase(),
    success: true,
  });
});

export default loginRouter;
