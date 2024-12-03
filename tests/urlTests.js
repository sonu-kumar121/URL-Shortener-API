const request = require('supertest');
const app = require('../server');

describe('POST /api/url/shorten', () => {
  it('should shorten a URL', async () => {
    const res = await request(app)
      .post('/api/url/shorten')
      .send({ originalUrl: 'https://example.com' })
      .set('x-auth-token', 'valid_jwt_token'); // Replace with an actual token
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('shortenedUrl');
  });
});
