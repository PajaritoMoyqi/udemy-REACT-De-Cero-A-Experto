import React, { useState } from 'react';
import '../02-useEffect/style.css';
import { MuultipleCustomHooks } from '../03-examples/MuultipleCustomHooks';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React ref</h1>
      <hr />

      {show && <MuultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={ () => {setShow(!show)} }>show/hide</button>

    </div>
  )
}
