import {getGifs} from '../../helpers/getGifs';

describe('getGif Fetch test', () => {
  test('10 elements', async () => {
    const res = await getGifs('One Punch');

    expect(res.length).toBe(10);
  })

  test('0 elems', async () => {
    const res = await getGifs('');

    expect(res.length).toBe(0);
  })
  
})
