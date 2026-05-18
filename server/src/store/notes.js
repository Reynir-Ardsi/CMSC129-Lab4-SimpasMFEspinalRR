let notes = [];

module.exports = {
  getNotes: () => notes,
  addNote: (note) => {
    notes.push(note);
    return note;
  },
  updateNote: (id, updatedFields) => {
    const index = notes.findIndex(n => n.id === id);
    if (index === -1) return null;
    notes[index] = { ...notes[index], ...updatedFields };
    return notes[index];
  },
  deleteNote: (id) => {
    const index = notes.findIndex(n => n.id === id);
    if (index === -1) return false;
    notes.splice(index, 1);
    return true;
  },
  clearNotes: () => {
    notes = [];
  }
};
