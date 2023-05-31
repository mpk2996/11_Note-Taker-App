const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// API route to retrieve notes
router.get('/api/notes', (req, res) => {
  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  const notes = JSON.parse(notesData);
  res.json(notes);
});

// API route to save a new note
router.post('/api/notes', (req, res) => {
  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  const notes = JSON.parse(notesData);
  const newNote = req.body;
  newNote.id = notes.length + 1; // Assign a unique ID to the new note
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  res.json(newNote);
});

// API route to delete a note
router.delete('/api/notes/:id', (req, res) => {
  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  const notes = JSON.parse(notesData);
  const noteId = parseInt(req.params.id);
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotes));
  res.json({ message: 'Note deleted successfully' });
});

module.exports = router;
