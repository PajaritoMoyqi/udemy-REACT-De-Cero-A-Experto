import { useState } from "react"

export const useCounter = (initState = 10) => {

  const [state, setstate] = useState(initState);

  const increment = () => {
    setstate( state + 1 );
  }

  const decrement = () => {
    setstate( state - 1 );
  }

  return {
    counter: state, increment, decrement
  };

}
