const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 500;

function validateNoteTitle(title) {
  if (!title || typeof title !== 'string' || title.trim() === '') return false;
  if (title.length > MAX_TITLE_LENGTH) return false;
  return true;
}

function validateNoteContent(content) {
  if (!content || typeof content !== 'string' || content.trim() === '') return false;
  if (content.length > MAX_CONTENT_LENGTH) return false;
  return true;
}

function generateNoteId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

module.exports = {
  MAX_TITLE_LENGTH,
  MAX_CONTENT_LENGTH,
  validateNoteTitle,
  validateNoteContent,
  generateNoteId
};
