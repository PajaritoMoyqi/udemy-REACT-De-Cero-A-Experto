

// gives title
describe('demo.test.js', () => {

  //first test
  test('equal string', () => {
  
    // initialization
    const msg = 'Hola Mundo';
  
    // estimation
    const msg2 = `Hola Mundo`;
  
    // observe  // worked by jest
    expect(msg).toBe(msg2);
  
  })
  
})


