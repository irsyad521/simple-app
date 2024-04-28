import request from 'supertest';
import app from "./index.js"

describe('GET /', () => {

    it('should return "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});