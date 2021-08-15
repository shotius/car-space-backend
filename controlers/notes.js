const notesRouter = require("express").Router();
const Note = require("../models/note");
const User = require("../models/user");

notesRouter.get("/", async (req, res) => {
  const notes = await Note.find({}).populate('user', {username: 1, name: 1})
  res.json(notes)
});

notesRouter.get("/:id", (req, res, next) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

notesRouter.post("/", async (req, res, next) => {
  const body = req.body;

  if (!body.userId) {
    return res.json(400).json({ error: "userId not provided" });
  }

  const user = await User.findById(body.userId);

  if (!body.content) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
    user: user._id,
  });

  const savedNote = await note.save();

  user.notes = user.notes.concat(savedNote._id)
  await user.save()

  res.json(savedNote)
});

module.exports = notesRouter;
