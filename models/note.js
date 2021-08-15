const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: { type: String, minLength: 5, required: true },
  date: {type: Date, required: true},
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

// modify bilt in method "toJSON"
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// we export model for create documents
module.exports = mongoose.model("Note", noteSchema);
