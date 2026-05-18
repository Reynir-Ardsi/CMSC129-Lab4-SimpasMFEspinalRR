const express = require('express');
const cors = require('cors');
const noteController = require('./controllers/noteController');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/notes', noteController.getNotes);
app.post('/notes', noteController.createNote);
app.put('/notes/:id', noteController.updateNote);
app.delete('/notes/:id', noteController.deleteNote);

module.exports = app;
