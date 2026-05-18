const { validateNoteTitle, validateNoteContent, generateNoteId } = require('../utils/validation');
const store = require('../store/notes');

const getNotes = (req, res) => {
  res.status(200).json(store.getNotes());
};

const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!validateNoteTitle(title) || !validateNoteContent(content)) {
    return res.status(400).json({ error: 'Invalid note title or content' });
  }
  const newNote = { id: generateNoteId(), title, content };
  store.addNote(newNote);
  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!validateNoteTitle(title) || !validateNoteContent(content)) {
    return res.status(400).json({ error: 'Invalid note title or content' });
  }
  const updated = store.updateNote(id, { title, content });
  if (!updated) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).json(updated);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const deleted = store.deleteNote(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).json({ message: 'Note deleted' });
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote
};
