import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from "react";
import App from '../App';

describe('App test', () => {


  test('snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  })
  
  test('show list of categories', () => {
    const categories = ['Hola', 'GG'];
    const wrapper = shallow(<App defaultCat={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
})
