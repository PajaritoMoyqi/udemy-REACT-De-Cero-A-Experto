import CounterApp from '../counterApp'
import React from 'react';
import '@testing-library/jest-dom';
import "../setupTests"; // 내거에서는 왜 이 파일이 작동하지 않는지 모르겠다.
import { shallow } from 'enzyme'; // snapshot이 좋아서 씁니다.

describe('CounterApp test', ()=>{

  let wrapper = shallow( <CounterApp />);

  beforeEach(()=>{
    wrapper = shallow( <CounterApp />);
  })

  test('def with enzyme', () => {

    expect( wrapper ).toMatchSnapshot();

  })
  
  test('num 100 with enzyme', () => {

    const num = 100;
    const wrapper = shallow( <CounterApp value={num} />);
    const parrafo = wrapper.find('h2').text().trim();

    expect( parrafo ).toBe(num.toString());

  })

  test('plus num', ()=>{
    
    wrapper.find('button').at(0).simulate('click'); // 시뮬레이션

    const counterTxt = wrapper.find('h2').text().trim();

    expect(counterTxt).toBe('1')

  })

  test('- num', ()=>{
    
    wrapper.find('button').at(2).simulate('click'); // 시뮬레이션

    const counterTxt = wrapper.find('h2').text().trim();

    expect(counterTxt).toBe('-1')

  })

  test('reset num', ()=>{
    

    const num = 100;
    const wrapper = shallow( <CounterApp value={num} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click'); // 시뮬레이션

    const counterTxt = wrapper.find('h2').text().trim();

    expect(counterTxt).toBe(num.toString());

  })

})