const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // Zerar as alterações no banco
    await connection.migrate.latest();
  });
  
  // afterEach()
  
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to crate a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      // .set('Authorization', 'ID_ONG')
      .send({
        name: "APAD2",
	      email: "contato@teste.com",
	      whatsapp: "47000000000",
	      city: "Rio do Sul",
	      uf: "SC"
      })

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});