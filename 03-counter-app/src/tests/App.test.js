import App from '../App'
import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import "../setupTests"; // 내거에서는 왜 이 파일이 작동하지 않는지 모르겠다.
import { shallow } from 'enzyme';

describe('App test', ()=>{
  
  // test('show title', ()=>{

  //   const title = 'Hola Mundo';

  //   const {getByText} = render( <App saludo={title} /> )

  //   expect(getByText(title)).toBeInTheDocument();

  // })

  test('show title with enzyme', () => {

    const saludo = 'Hola Mundo'
    const wrapper = shallow( <App saludo={saludo} />);

    expect( wrapper ).toMatchSnapshot();

  })
  
  test('show sub with enzyme', () => {

    const saludo = 'Hola Mundo'
    const sub = 'Mi Primera Aplicacion'
    const wrapper = shallow( <App saludo={saludo} subtitulo={sub} />);
    const parrafo = wrapper.find('p').text().trim();

    expect( parrafo ).toBe(sub);

  })

})