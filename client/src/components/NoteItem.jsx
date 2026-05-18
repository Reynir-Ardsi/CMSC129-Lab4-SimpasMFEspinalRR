function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div data-testid="note-item" className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button data-testid="edit-note-btn" onClick={() => onEdit(note)}>Edit</button>
      <button data-testid="delete-note-btn" onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
