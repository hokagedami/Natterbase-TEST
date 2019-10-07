const request = require('supertest');
const app = require('../app');
const endpoint = '/remove-attribute';

const testData = {
   address: {
       data: {"address":"33 Tennyson Point","first_name":"Mavra","last_name":"Dougan"},
       item: 'address'
   },
   first_name: {
       data: {"address":"25 Sommers Way","first_name":"Fritz","last_name":"Prando"},
       item: 'first_name'
   },
   last_name:  {
       data: {"address":"01 Mosinee Road","first_name":"Dory","last_name":"Death"},
       item: "last_name"
   },
   age: {
       data: {"address":"2135 Mandrake Terrace","first_name":"Lorelle","last_name":"Musselwhite"},
       item: "age"
   },
   email: {
       data: {"address":"3 Lake View Street","first_name":"Kyrstin","last_name":"Levee"},
       item: "email"
   }
};
const resultData = {
    address: {"first_name":"Mavra","last_name":"Dougan"},
    first_name: {"address":"25 Sommers Way","last_name":"Prando"},
    last_name:  {"address":"01 Mosinee Road","first_name":"Dory"},
    age: 'attribute not found',
    email: 'attribute not found'
};

describe('Remove Attribute From Object', () => {
    it('should remove address attribute', async () => {
        const res = await request(app)
            .post(endpoint)
            .send(testData.address);
        expect(res.body).toStrictEqual(resultData.address);
        expect(res.statusCode).toBe(200);
    });
    it('should remove first_name attribute', async () => {
        const res = await request(app)
            .post(endpoint)
            .send(testData.first_name);
        expect(res.body).toStrictEqual(resultData.first_name);
        expect(res.statusCode).toBe(200);
    });
    it('should remove last_name attribute', async () => {
        const res = await request(app)
            .post(endpoint)
            .send(testData.last_name);
        expect(res.body).toStrictEqual(resultData.last_name);
        expect(res.statusCode).toBe(200);

    });
    it('should try to remove age attribute and and return attribute not found', async () => {
        const res = await request(app)
            .post(endpoint)
            .send(testData.age);
        expect(res.body).toStrictEqual({});
        expect(res.text).toBe(resultData.age);
        expect(res.statusCode).toBe(404);
    });
    it('should try to remove age attribute and and return attribute not found', async () => {
        const res = await request(app)
            .post(endpoint)
            .send(testData.email);
        expect(res.body).toStrictEqual({});
        expect(res.text).toBe(resultData.email);
        expect(res.statusCode).toBe(404);

    });
});