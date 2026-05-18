const { validateNoteTitle, validateNoteContent, generateNoteId } = require('../../src/utils/validation');

describe('Validation Utils', () => {
  describe('validateNoteTitle', () => {
    it('should reject empty title', () => {
      expect(validateNoteTitle("")).toBe(false);
    });

    it('should reject title longer than 100 characters', () => {
      const longTitle = 'a'.repeat(101);
      expect(validateNoteTitle(longTitle)).toBe(false);
    });

    it('should accept valid title', () => {
      expect(validateNoteTitle("Valid Title")).toBe(true);
    });
  });

  describe('validateNoteContent', () => {
    it('should reject empty content', () => {
      expect(validateNoteContent("")).toBe(false);
    });

    it('should reject content longer than 500 characters', () => {
      const longContent = 'a'.repeat(501);
      expect(validateNoteContent(longContent)).toBe(false);
    });

    it('should accept valid content', () => {
      expect(validateNoteContent("Valid Content")).toBe(true);
    });
  });

  describe('generateNoteId', () => {
    it('should generate unique ids', () => {
      const id1 = generateNoteId();
      const id2 = generateNoteId();
      expect(id1).not.toBe(id2);
      expect(id1).toBeDefined();
    });
  });
});
