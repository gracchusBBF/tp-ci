const request = require('supertest');
const app = require('./app'); // On importe ton app Express

describe('Test de la route principale GET /', () => {
  
  it('devrait retourner la chaîne de caractères "Hello World!"', async () => {
    // 1. On envoie la requête à l'application
    const response = await request(app).get('/');

    // 2. On vérifie le code de statut HTTP (200 OK)
    expect(response.statusCode).toBe(200);

    // 3. On vérifie précisément la chaîne de caractères reçue
    expect(response.text).toBe('Hello World!');
  });

});