const request = require('supertest');
const app = require('../app');
const endpoint = '/lowest-index';


describe(`Find Aladdin's Lowest Index of Starting Points`, () => {
    it('should return 0', async () => {
        const res = await request(app)
            .post(endpoint)
            .send({
                magicSources: [3, 2, 4, 4],
                distances: [2, 3, 4, 2]
            });
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual({index: 0})
    });
});







