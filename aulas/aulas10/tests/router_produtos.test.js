const supertest = require("supertest");

const app = require("../app");

const req = supertest(app);

let id = null;

describe("API Loja Virtual - Produtos", () => {
  test("Deve retornar 201 e um JSON no POST /produtos", 
  async () => {
    const res = await req.post("/produtos").send({
      nome: "banana",
      preco: 12.0,
    });
    expect(res.status).toBe(201);
    expect(res.type).toBe("application/json");
  });


  test("Deve retornar 422 e JSON no POST /produtos", async() =>{
    const res = await req.post("/produtos").send({});
    expect(res.status).toBe(422);
    expect(res.type).toBe("application/json");
  })

  test("Deve retornar 200 e JSON no GET /produtos", async () => {
    const res = await req.get("/produtos");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
    if (res.body.length > 0) {
      id = res.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e JSON no GET /produtos/id", async() => {
    const res = await req.get(`/produtos/${id}`);
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
  });

  test("Deve retornar 404 e JSON no GET /produtos/id", async () => {
    const res = await req.get('/produtos/663e0bf0be59ccb5e316667c');
    expect(res.status).toBe(404);
    expect(res.type).toBe("application/json");
  });

  test("Deve retonar 200 e JSON no PUT /produtos/id", async() => {
    const res = await req.put(`/produtos/${id}`)
      .send({nome: "Banana naninca", preco: 7.8});
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
  });

  test("Deve retornar 404 e JSON no PUT /produtos/id", async () => {
    const res = await req.put('/produtos/663e0bf0be59ccb5e316667c');
    expect(res.status).toBe(404);
    expect(res.type).toBe("application/json");
  });

  test("Deve retonar 422 e JSON no PUT /produtos/id", async() => {
    const res = await req.put(`/produtos/${id}`)
    expect(res.status).toBe(422);
    expect(res.type).toBe("application/json");
  });

  test("Deve retonar 204 e JSON no DELETE /produtos/id", async() => {
    const res = await req.delete(`/produtos/${id}`)
    expect(res.status).toBe(204);
    expect(res.type).toBe("");
  });

  test("Deve retonar 404 e JSON no DELETE /produtos/id", async() => {
    const res = await req.delete(`/produtos/${id}`)
    expect(res.status).toBe(404);
    expect(res.type).toBe("application/json");
});

});