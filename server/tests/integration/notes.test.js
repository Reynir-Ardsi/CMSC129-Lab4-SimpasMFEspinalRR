const request = require('supertest');
const app = require('../../src/app');

describe('Notes API Integration Tests', () => {
  let createdNoteId;

  it('POST /notes should create a new note', async () => {
    const newNote = { title: 'Study Guide', content: 'Important details for the TDD exam.' };
    const res = await request(app).post('/notes').send(newNote);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newNote.title);
    expect(res.body.content).toBe(newNote.content);
    createdNoteId = res.body.id;
  });

  it('GET /notes should return all notes', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /notes/:id should update an existing note', async () => {
    const updatedNote = { title: 'Updated Guide', content: 'Updated content.' };
    const res = await request(app).put(`/notes/${createdNoteId}`).send(updatedNote);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedNote.title);
  });

  it('DELETE /notes/:id should delete the note', async () => {
    const res = await request(app).delete(`/notes/${createdNoteId}`);
    expect(res.statusCode).toBe(200);
  });
});
