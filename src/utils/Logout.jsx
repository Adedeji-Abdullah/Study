import React from 'react'
import { account } from '../appwrite'

const Logout = () => {

  const handleLogout = (e) => {
    e.preventDefault()

    { account.get ? account.deleteSession('current') : alert("You should create an account first")}
  }
  return (
    <button onClick={handleLogout} className='logout'>Log out</button>
  )
}

export default Logout
