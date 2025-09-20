// Vous devez insérer les nouveaux tests ici
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { Joueur } from '../../src/core/joueur';
import { response } from 'express';

let player1: Joueur;
let player2: Joueur;
 
const request = supertest(app);

 beforeAll(async () => {
    player1 = new Joueur("JoueurOne");
    player2 = new Joueur("JoueurTwo");
  });

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  it("devrait retouner code 200 et fichier JSON", async () => {
    //throw new Error("Ce test n'a pas été défini")
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("devrait valider la postcondition du contrat d'operation: plus de joueur",async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.body).not.toHaveProperty('Joueur')
  });
  
});