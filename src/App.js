import React, { useState, useEffect, useContext } from 'react'
import List from './List'
import Alert from './Alert'
import { AppContext } from './Context'

function App() {
  const { todos, addTodo, clearTodo, alert, showAlert } = useContext(AppContext)
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!name) return showAlert(true, 'please enter the value', 'danger')

    showAlert(true, 'idem added', 'success')
    const newTodo = {
      id: new Date().getTime().toString(),
      title: name
    }
    addTodo(newTodo)
    setName('')
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>todo app</h3>
        <div className="form-control">
          <input
            type="text"
            className='grocery'
            placeholder='add todo'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            type='submit'
            className='submit-btn'
          >
            add todo
          </button>
        </div>
      </form>


      {todos.length > 0 && (
        <div className="grocery-container">
          <List />
          <button className='clear-btn' onClick={() => clearTodo()}>clear items</button>
        </div>
      )}

    </section>
  )
}

export default App
