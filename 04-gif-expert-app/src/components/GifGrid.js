import React, {useState, useEffect} from 'react';
import propTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {
  // const [images, setImages] = useState([])

  // useEffect(()=>{
  //   getGifs(category)
  //     .then(setImages);
  // }, [category]); // []가 있어야 한 번만 실행된다. 처음 렌더링될 때만.
  // // category가 바뀌면 그때만 다시 실행한다.
  const {data:images, loading} = useFetchGifs(category);

  // getGifs(); // dom이 변할 때마다 계속 실행이 된다.

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">'Cargando.....'</p>}

      <div className="card-grid">      
          {images.map(i => <GifGridItem key={i.id} {...i}/>)}
      </div>
    </>
  ) // list를 그대로 가감없이 보여주니까 그냥 map으로 안쪽 것들을 바꾸는 것뿐이다.
}

GifGrid.propTypes = {
  category: propTypes.string.isRequired
}