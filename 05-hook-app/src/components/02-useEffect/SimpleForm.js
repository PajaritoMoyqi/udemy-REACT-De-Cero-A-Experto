import React, { useEffect, useState } from 'react'
import  { Message } from './Message';
import './style.css'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;

  useEffect(()=>{
    console.log('hey');
  }, [])

  useEffect(()=>{
    console.log('formstate');
  }, [formState])

  useEffect(()=>{
    console.log('email');
  }, [email])

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name] : target.value 
    })
  }

  return (
    <div>
      <h1>Simple Form useEffect</h1>
      <hr />

      <div className="form-group">
        <input type="text" name="name" className="form-control" placeholder="name" autoComplete="off" value={name} onChange={handleInputChange}></input>
        <input type="text" name="email" className="form-control" placeholder="email" autoComplete="off" value={email} onChange={handleInputChange}></input>
        
      </div>
      {(name==='123') && <Message />}
    </div>
  )
}
