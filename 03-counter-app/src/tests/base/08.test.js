import '@testing-library/jest-dom';
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

// gives title
describe('08 test', () => {

  //first test
  test('return heros with id', ()=>{

    const id = 1;
    const hero = getHeroeById( id );

    const heroeData = heroes.find(h => h.id === id);

    expect(hero).toEqual(heroeData);

  })

  test('return heros with id undefiend', ()=>{

    const id = 10;
    const hero = getHeroeById( id );

    const heroeData = heroes.find(h => h.id === id);

    expect(hero).toBe(undefined);

  })

  test('return heros with owner', ()=>{

    const owner = 'DC';
    const hero = getHeroesByOwner( owner );

    const heroeData = heroes.filter( (heroe) => heroe.owner === owner );

    expect(hero).toEqual(heroeData);
    expect(hero.length).toBe(3);

  })  
})


