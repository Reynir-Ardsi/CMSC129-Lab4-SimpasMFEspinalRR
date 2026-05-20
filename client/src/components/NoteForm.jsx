function NoteForm({ title, content, editingId, onTitleChange, onContentChange, onAdd, onSave, onCancel }) {
  return (
    <div className="note-form">
      <input
        data-testid="note-title"
        type="text"
        placeholder="✏️  Note title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <textarea
        data-testid="note-content"
        placeholder="📝  Write your note here..."
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
      <div className="form-actions">
        {editingId ? (
          <>
            <button data-testid="save-note-btn" className="btn btn-primary" onClick={onSave}>
              💾 Save Changes
            </button>
            <button className="btn btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button data-testid="add-note-btn" className="btn btn-primary" onClick={onAdd}>
            ➕ Add Note
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteForm;
