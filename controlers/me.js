const meRouter = require("express").Router();
const User = require("../models/user");

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

module.exports = meRouter;
