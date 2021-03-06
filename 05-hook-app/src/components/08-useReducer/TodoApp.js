import React, {useReducer, useEffect} from 'react'
import { useForm } from '../../hooks/useForm'
import { todoReducer } from './todoReducer'

import './style.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [
  //   {id: new Date().getTime(), description: 'Aprender React', done: false}
  // ]
}

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);
  }

  const handleTodo = (todoId) => {
    dispatch({
      type: 'toggle', payload: todoId
    })
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>Todo App ({ todos.length })</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleTodo={handleTodo}/>
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  )
}
