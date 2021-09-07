import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './style.css'

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email changed')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Form with Custom Hook</h1>
      <hr />

      <div className="form-group">
        <input type="text" name="name" className="form-control" placeholder="name" autoComplete="off" value={name} onChange={handleInputChange}></input>
        <input type="text" name="email" className="form-control" placeholder="email" autoComplete="off" value={email} onChange={handleInputChange}></input>
        <input type="password" name="password" className="form-control" placeholder="password" autoComplete="off" value={password} onChange={handleInputChange}></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  )
}
