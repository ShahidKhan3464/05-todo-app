import React, { useState, createContext } from 'react'

export const AppContext = createContext()

const getLocalStorage = () => {
    let todos = localStorage.getItem('todos')
    if (todos) {
        return JSON.parse(todos)
    }
    else {
        return []
    }
}

export const Context = (props) => {
    const [todos, setTodos] = useState(getLocalStorage())
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const clearTodo = () => {
        setTodos([])
    }

    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({ show, msg, type })
    }

    return (
        <AppContext.Provider value={{
            todos,
            alert,
            addTodo,
            removeTodo,
            clearTodo,
            showAlert
        }}>
            {props.children}
        </AppContext.Provider>
    )
}