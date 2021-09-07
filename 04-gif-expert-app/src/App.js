import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const App = ({defaultCat = []}) => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(defaultCat);

  const handleAdd = () => {
    const name = '충사';

    setCategories(cats => [...cats, name]);
  }
  
  return  (
    <>
      <h2>Gif-Expert-App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        { categories.map((item)=>
          <GifGrid key={item} category={item}
        />) }
      </ol>
    </>
  );

} // key는 무조건 유니크해야 함.

export default App;