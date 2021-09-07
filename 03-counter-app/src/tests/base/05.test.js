
import '@testing-library/jest-dom'; // toBe 쓰려고
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

// gives title
describe('05 test', () => {

  //first test
  test('getUser test', ()=>{

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest)

  })

    //first test
    test('getUsuario test', ()=>{

      const name = 'gg'

      const userTest = {
        uid: 'ABC567',
        username: name
      }
  
      const user = getUsuarioActivo(name);
  
      expect(user).toEqual(userTest)
  
    })
  
})


