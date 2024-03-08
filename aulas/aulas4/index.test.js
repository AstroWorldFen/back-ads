const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("deve retornar 200 no GET /", async function(){
    const response = await request.get("/")
    expect(response.status).toBe(200)
});