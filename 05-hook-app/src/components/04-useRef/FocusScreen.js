import React, {useRef} from 'react'
import '../02-useEffect/style.css';

export const FocusScreen = () => {

  const ref = useRef();

  const handleClick = () => {
    ref.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={ref} className="form-control" placeholder="your name"></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
    </div>
  )
}
