import express from 'express';
const logoutRouter = express.Router();

logoutRouter.get('/', async (req, res) => {
  delete req.session.user ;
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.send('removed session information');
    }
  });
});

export default logoutRouter;
