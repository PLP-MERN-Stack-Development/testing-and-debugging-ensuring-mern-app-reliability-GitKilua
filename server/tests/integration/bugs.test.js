  const request = require('supertest');
  const mongoose = require('mongoose');
  const app = require('../../index'); // Adjust path if needed
  const Bug = require('../../models/Bug');

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_MONGO_URI || 'mongodb://localhost:27017/testdb');
  });
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('Bugs API', () => {
    it('should create a bug', async () => {
      const res = await request(app).post('/api/bugs').send({ title: 'Test Bug', description: 'Test desc' });
      expect(res.status).toBe(201);
      expect(res.body.title).toBe('Test Bug');
    });
    it('should get all bugs', async () => {
      const res = await request(app).get('/api/bugs');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
  