function validateNoteTitle(title) {
  if (!title || typeof title !== 'string' || title.trim() === '') return false;
  if (title.length > 100) return false;
  return true;
}

function validateNoteContent(content) {
  if (!content || typeof content !== 'string' || content.trim() === '') return false;
  if (content.length > 500) return false;
  return true;
}

function generateNoteId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

module.exports = {
  validateNoteTitle,
  validateNoteContent,
  generateNoteId
};
