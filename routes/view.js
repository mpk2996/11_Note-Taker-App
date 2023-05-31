const express = require('express');
const view = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
view.get('/notes/', (req, res) => {
    console.info(`${req.method} notes request received`);
    //readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    res.sendFile('notes.html', { root: 'public' });
  });

  module.exports = view;