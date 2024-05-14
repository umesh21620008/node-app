const request = require('supertest');
const app = require('./index');

describe('GET /notes', () => {
  it('should return all notes', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /notes', () => {
  it('should create a new note', async () => {
    const newNote = { title: 'New Note', content: 'This is a new note' };
    const res = await request(app)
      .post('/notes')
      .send(newNote);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject(newNote);
  });
});

describe('GET /notes/:id', () => {
  it('should return a specific note by ID', async () => {
    const res = await request(app).get('/notes/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(1);
  });

  it('should return 404 if note ID does not exist', async () => {
    const res = await request(app).get('/notes/999');
    expect(res.statusCode).toEqual(404);
  });
});

describe('PUT /notes/:id', () => {
  it('should update a specific note by ID', async () => {
    const updatedNote = { title: 'Updated Note', content: 'This note has been updated' };
    const res = await request(app)
      .put('/notes/1')
      .send(updatedNote);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(updatedNote);
  });

  it('should return 404 if note ID does not exist', async () => {
    const res = await request(app)
      .put('/notes/999')
      .send({ title: 'Updated Note', content: 'This note has been updated' });
    expect(res.statusCode).toEqual(404);
  });
});

describe('DELETE /notes/:id', () => {
  it('should delete a specific note by ID', async () => {
    const res = await request(app).delete('/notes/1');
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 if note ID does not exist', async () => {
    const res = await request(app).delete('/notes/999');
    expect(res.statusCode).toEqual(404);
  });
});
