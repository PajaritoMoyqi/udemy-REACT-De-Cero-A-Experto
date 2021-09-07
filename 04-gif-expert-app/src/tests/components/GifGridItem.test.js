import React from 'react';

import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '../../../setupTests';

describe('GifGirdItem comp test', () => {

  const title = 'title';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow( <GifGridItem url={url} title={title} />);

  test('show comp correctly ', () => {

    expect(wrapper).toMatchSnapshot();

  })

  test('title in paragraph', () => {
    
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);

  })

  test('url, title in img', () => {
    
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })

  test('div have fadein', () => {
    
    const div = wrapper.find('div');

    expect(div.prop('className').includes('animate__fadeIn')).toBe(true)

  })
  
  

  
  
})
