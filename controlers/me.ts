import User from "../models/user";
import express from 'express'
const meRouter = express.Router();

meRouter.get("/", async (req, res) => {
  const { user } = req.session;
  if (user) {
    if (await User.findById(user.id)) {
      res.json({
        username: user.username,
        isAuthenticated: user.isAuthenticated,
        role: user.role.toLowerCase(),
      });
    } else {
      res.status(401).json({ error: "user not found" });
    }
  } else {
    res.json({ username: null, isAuthenticated: false, role: null });
  }
});

export default meRouter;
