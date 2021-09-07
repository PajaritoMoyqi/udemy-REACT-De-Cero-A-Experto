import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-deses-arr'

// gives title
describe('07 test', () => {

  //first test
  test('return array test', ()=>{

    const [ letras, number ] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');
    expect(number).toBe(123);
    expect(typeof number).toBe('number');

  })
  
})


