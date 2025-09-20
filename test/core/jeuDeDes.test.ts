import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDesTest', () => {
  let jdd: JeuDeDes;
  beforeEach(async () => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, async () => {
    expect(jdd.joueurs).toEqual("[]")
  })

  it('devrait retourner une valeur entre 3 et 19', () => {
    for (let i = 0; i < 200; i++) {
      expect(jdd.brasser()).toBeWithin(3, 19);
    }
  })

  it('devrait retourner finalement toutes les valeurs entre 3 et 18', () => {
    const resultats = new Set();
    for (let i = 0; i < 1000; i++) { // Pas l'ideal de faire 1000 tests. doit utiliser mock a la place mais manque de temps pour recherche.
      resultats.add(jdd.brasser())
    }
    expect(resultats.size).toBe(16);
    for (let i = 2; i < 18; i++) {
      expect(resultats.has(i + 1)).toBeTrue();
    }
    // cas particuliers
    expect(resultats.has(1)).toBeFalsy();
    expect(resultats.has(2)).toBeFalsy();
    expect(resultats.has(19)).toBeFalsy();
  })

});
