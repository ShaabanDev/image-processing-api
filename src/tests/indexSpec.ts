import supertest from 'supertest';

import app from '../index';

const request = supertest(app);

describe('test all the types of the endpoint response', () => {
  it('test the response of resizing a valid image with valid query params ', async () => {
    // thumb folder must be empty
    const response = await request.get(
      '/api/images/resize/?filename=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });
  it('test the response of repeating resizing a valid image with valid query params  ', async () => {
    const response = await request.get(
      '/api/images/resize/?filename=fjord&width=300&height=300'
    );
    expect(response.status).toBe(400);
  });
  it('test the response of repeating resizing an image with invalid query params  ', async () => {
    const response = await request.get(
      '/api/images/resize/?filename=aaaa&width=aaa&height=ada'
    );
    expect(response.status).toBe(401);
  });
});
