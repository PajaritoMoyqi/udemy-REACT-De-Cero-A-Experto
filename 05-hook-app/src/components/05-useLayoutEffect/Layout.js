import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/style.css';
import './layout.css'

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote } = !!data && data[0];

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pRef}> {quote} </p>
        <hr />
      </blockquote>

      <pre>
        {JSON.stringify(boxSize)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
