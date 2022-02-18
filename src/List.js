import React from 'react'
import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppContext } from './Context'

const List = () => {
  const { todos, removeTodo } = useContext(AppContext)

  return (
    <div className="grocery-list">
      {todos.map(({ id, title }) => {
        return <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className="btn-container">
            <button type='button' className='delete-btn' onClick={() => removeTodo(id)}><FaTrash /></button>
          </div>
        </article>
      })}
    </div>
  )
}

export default List
