const Note = require("../models/note.model.js");

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch {
    res.status(400)
    res.send({ error: "notes not found" })
  }
}

const getUserNotes = async (req, res) => {
  try {
    const notes = await Note.find({ uid: req.params.uid });
    res.send(notes);
  } catch {
    res.status(400)
    res.send({ error: "User doesn't exist" })
  }
}

const deleteNote = async (req, res) => {
  try {
    await Trip.deleteOne({ _id: req.params.id })
    res.status(204).send({ message: `Note ${req.params.id} has been deleted.` })
  } catch {
    res.status(404)
    res.send({ error: "Note does not exists" })
  }
}

const createNote = async (req, res) => {
  const newNote = new Note({
    uid: req.body.uid,
    name: req.body.name,
    content: req.body.location
  })
  await newNote.save()
  res.send(newNote)
}

const updateNote = async  (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id })

    if (req.body.name) {
      note.name = req.body.name;
    }

    if (req.body.location) {
      note.content = req.body.content;
    }

    await note.save()
    res.send(note)
  } catch {
    res.status(404)
    res.send({ error: "Note does not exist" })
  }
}

module.exports = {
  getNotes,
  getUserNotes,
  deleteNote,
  createNote,
  updateNote
};