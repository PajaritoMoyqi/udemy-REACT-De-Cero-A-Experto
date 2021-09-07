import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const anotherUser = {
    id:123, name: 'Fernando'
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={()=>{
        setUser(anotherUser)
      }}>Login</button>
    </div>
  )
}
