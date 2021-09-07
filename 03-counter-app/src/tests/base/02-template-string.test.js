// import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string'

// gives title
describe('02 test', () => {

  //first test
  test('getSaludo test', () => {
  
    const nombre = 'Frenando';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe( 'Hola ' + nombre );
  
  })

  test('getSaludo default test', ()=>{

    const defaultNombre = 'Carlos';
    const saludo = getSaludo();

    expect(saludo).toBe( 'Hola ' + defaultNombre );
  })
  
})


