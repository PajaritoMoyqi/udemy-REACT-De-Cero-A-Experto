import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from "react";

describe('AddCategory test', () => {
  
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  beforeEach(()=>{
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  })

  test('snapshot', () => {

    expect(wrapper).toMatchSnapshot();

  })

  test('change in inputvalue', () => {
    const input = wrapper.find('input');
    const value = 'hola mundo'

    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('not call on submit', () => {
    
    wrapper.find('form').simulate('submit', {preventDefault(){}}) // ==> preventDefault: ()=>{}

    expect(setCategories).not.toHaveBeenCalled();

  })
  
  test('call setCategory and nothing in input value', () => {
    
    const input = wrapper.find('input');
    const value = 'hola mundo!!!'
    input.simulate('change', {target: {value}});

    wrapper.find('form').simulate('submit', {preventDefault(){}})

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value').trim()).toBe('')

  })
  
  
})
