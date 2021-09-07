import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes';

// gives title
describe('09 test', () => {

  //first test
  test('async1 test', (done)=>{ // async-await or promise

    const id = 1;

    getHeroeByIdAsync(id)
      .then( h => {
        expect(h).toBe(heroes[id-1]);
        done();
      });

  });

  test('async1 wrong test', (done)=>{

    const id = 10;

    getHeroeByIdAsync(id)
      .catch( e => {
        expect(e).toBe('No se pudo encontrar el héroe');
        done();
      });

  });
  
})


