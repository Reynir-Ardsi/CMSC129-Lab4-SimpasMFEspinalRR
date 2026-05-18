function NoteForm({ title, content, editingId, onTitleChange, onContentChange, onAdd, onSave }) {
  return (
    <div className="note-form">
      <input
        data-testid="note-title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <textarea
        data-testid="note-content"
        placeholder="Content"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
      {editingId ? (
        <button data-testid="save-note-btn" onClick={onSave}>Save</button>
      ) : (
        <button data-testid="add-note-btn" onClick={onAdd}>Add Note</button>
      )}
    </div>
  );
}

export default NoteForm;
