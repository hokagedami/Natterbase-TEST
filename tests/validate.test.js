const request = require('supertest');
const app = require('../app');
const endpoint = '/validate';

describe('Validate Request Body', () => {
    it('should validate data object with rules array elements and return valid', async () => {
        const res = await request(app)
            .post(endpoint)
            .send({
                data: {
                    type: "durban",
                    crux: "Indices",
                    color: "green",
                    title: "Indict the idiot"
                },
                rules: [
                    "type",
                    "crux",
                    "color",
                    "title"
                ]
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toStrictEqual({});
        expect(res.text).toBe('valid')
    });

    it('should validate data objects with rules array elements and return two failed rules', async () => {
        const res = await request(app)
            .post(endpoint)
            .send({
                data: {"address": "3 Lake View Street", "first_name": "Kyrstin", "last_name": "Levee"},
                rules: [
                    "address",
                    "first_name",
                    "last_name",
                    "email",
                    "age"
                ]
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toStrictEqual(["email", "age"]);
        expect(res.body).toHaveLength(2)
    });

    it('should validate data objects with empty rules array', async () => {
        const res = await request(app)
            .post(endpoint)
            .send({
                data: {"address": "3 Lake View Street", "first_name": "Kyrstin", "last_name": "Levee"},
                rules: [ ]
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toStrictEqual({});
        expect(res.text).toStrictEqual('valid');
    });

    it('should validate wrong request body', async () => {
        const res = await request(app)
            .post(endpoint)
            .send({
                data: [1, 2, 3, 4, 5],
                rules: [1, 4]
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toStrictEqual({error: "invalid data or rules provided"});
    });
});