// racf 하면 다 생성된다.
// return html to index.js(padre)

import React, { useState } from 'react'; // to use jsx // use가 들어가면 주로 Hooks다.
import propTypes from 'prop-types';

const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value ); // counter and setCounter is linked.

  const handleAdd = () => {
    setCounter ( counter + 1 )
  }
  const handleReset = () => {
    setCounter ( value )
  }
  const handleReduce = () => {
    setCounter ( counter - 1 )
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }> +1 </button> 
      <button onClick={ handleReset }> Reset </button> 
      <button onClick={ handleReduce }> -1 </button> 
    </>
  ); // event

}

// need property from index.js

CounterApp.propTypes = {
  value: propTypes.number
}  // variable condition
CounterApp.defaultProps = {
  value: 0
}  // variable default. no need any import. why?

export default CounterApp; // export App.js