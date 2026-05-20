import { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteItem from './components/NoteItem';

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

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
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
    <div className="app-container">
      <header className="app-header">
        <h1>📒 Notes App</h1>
        <p>Organize your thoughts, one note at a time</p>
      </header>

      <NoteForm
        title={title}
        content={content}
        editingId={editingId}
        onTitleChange={setTitle}
        onContentChange={setContent}
        onAdd={handleAddNote}
        onSave={handleSaveNote}
        onCancel={handleCancelEdit}
      />

      <div className="notes-list-header">
        <h2>Your Notes</h2>
        <span className="note-count">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span>
      </div>

      <div>
        {notes.length === 0 ? (
          <div className="empty-state">
            <div className="emoji">📝</div>
            <p>No notes yet. Create your first note above!</p>
          </div>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onEdit={handleEditClick}
              onDelete={handleDeleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
