const express = require('express');
const router = express.Router();
const path = require('path');

// Route to display the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../notes.html'));
});

module.exports = router;
