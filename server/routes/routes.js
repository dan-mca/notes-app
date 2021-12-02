const express = require("express");
const router = express.Router();
const notes = require('../controllers/notes.controller.js');


// Notes apis
// Get notes
router.get("/notes", notes.getNotes)

// Get user notes
router.get("/notes/user/:uid", notes.getUserNotes)

// Create a note
router.post("/notes", notes.createNote)

// Delete a note
router.delete("/notes/:id", notes.deleteNote)

// Update a note
router.put("/notes/:id", notes.updateNote)

module.exports = router;