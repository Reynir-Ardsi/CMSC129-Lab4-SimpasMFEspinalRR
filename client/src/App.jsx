import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    const res = await fetch('/notes');
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    await fetch('/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    setTitle('');
    setContent('');
    fetchNotes();
  };

  const handleEditClick = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleSaveNote = async () => {
    await fetch(`/notes/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    setEditingId(null);
    setTitle('');
    setContent('');
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    await fetch(`/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  return (
    <div>
      <h1>Notes App</h1>

      <div>
        <input
          data-testid="note-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          data-testid="note-content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {editingId ? (
          <button data-testid="save-note-btn" onClick={handleSaveNote}>
            Save
          </button>
        ) : (
          <button data-testid="add-note-btn" onClick={handleAddNote}>
            Add Note
          </button>
        )}
      </div>

      <div>
        {notes.map((note) => (
          <div key={note.id} data-testid="note-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button data-testid="edit-note-btn" onClick={() => handleEditClick(note)}>
              Edit
            </button>
            <button data-testid="delete-note-btn" onClick={() => handleDeleteNote(note.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
