import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from "react";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid test', () => {
  
  const category = 'One Punch'

  test('snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    }); // default values that useFetchGifs gives

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot();
  });

  test('show items when download img', () => {

    const gifs = [{
      id: 'abc',
      url: 'https://localhost/cucucu/cucu',
      title: 'vaina'
    },{
      id: 'abcd',
      url: 'https://localhost/cucucu/cucu',
      title: 'vainas'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length); // props number = length
  })
  
  test('should ', () => {
    
  })
  
})
