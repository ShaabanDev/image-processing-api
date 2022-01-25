import supertest from 'supertest';
import resizeImage from '../../loaders/sharp-fun';
import imageCheck from '../../middleware/image-check';

import app from '../index';
const request = supertest(app);

describe('Test if imageCheck and resizeImage functions ', () => {
  it('expect imageCheck function defined ', () => {
    expect(imageCheck).toBeDefined();
  });
  it('expect imageCheck function return true with valid filename ', () => {
    expect(resizeImage('encenadaport', 300, 300) instanceof Promise).toBe(true);
  });
});
describe('test all the types of the endpoint response', () => {
  it('test the response of resizing a valid image with valid query params ', async () => {
    // thumb folder must be empty
    const response = await request.get(
      '/api/images/resize/?filename=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });

  it('test the response of resizing an image with invalid query params  ', async () => {
    const response = await request.get(
      '/api/images/resize/?filename=aaaa&width=aaa&height=ada'
    );
    expect(response.status).toBe(401);
  });
});
