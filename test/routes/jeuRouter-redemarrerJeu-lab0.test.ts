// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import { Joueur } from '../../src/core/joueur';

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  let player1: Joueur;
  let player2: Joueur;

  beforeAll(async () => {
    // This code runs once before any tests in the 'User Authentication' suite
    player1 = new Joueur("JoueurOne");
    player2 = new Joueur("JoueurTwo");
  });

  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
  
});
