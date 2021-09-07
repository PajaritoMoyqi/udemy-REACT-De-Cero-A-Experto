import React, {useState, useCallback, useEffect} from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/style.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter+1);
  // }

  const increment = useCallback(
    (num) => {
      setCounter( c => c+num );
    },
    [setCounter]
  )

  useEffect(() => {
    // do something
  }, [increment])

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment}/>
    </div>
  )
}
