function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div data-testid="note-item" className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button data-testid="edit-note-btn" className="btn-sm btn-edit" onClick={() => onEdit(note)}>
          ✏️ Edit
        </button>
        <button data-testid="delete-note-btn" className="btn-sm btn-delete" onClick={() => onDelete(note.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
