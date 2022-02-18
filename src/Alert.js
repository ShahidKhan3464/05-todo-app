import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'

const Alert = () => {
  const { alert, showAlert } = useContext(AppContext)
  const { type, msg } = alert

  useEffect(() => {
    setTimeout(() => {
      showAlert()
    }, 3000);
  }, [])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
