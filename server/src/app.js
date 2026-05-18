const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Stubbed routes - not implemented yet
app.get('/notes', (req, res) => {
  res.status(500).json({ error: 'Not implemented' });
});

app.post('/notes', (req, res) => {
  res.status(500).json({ error: 'Not implemented' });
});

app.put('/notes/:id', (req, res) => {
  res.status(500).json({ error: 'Not implemented' });
});

app.delete('/notes/:id', (req, res) => {
  res.status(500).json({ error: 'Not implemented' });
});

module.exports = app;
