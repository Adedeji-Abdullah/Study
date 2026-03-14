import React, { useState } from 'react'
// import { Account } from 'appwrite'
import { account } from '../appwrite'
import { ID } from 'appwrite'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await account.create(
        {
          userId: ID.unique(),
          email,
          password,
          name
        }
      )
      alert('success')
      navigate("/login")
      console.log(Response)
    } catch (error) {
      alert(error)
    }

  }
  return (

    <div className='Register'>
      <form onSubmit={handleClick}>
        <h1>Register</h1>
        <input
        className='email'
          type="email"
          placeholder='Email'
          onChange={(e) => { setEmail(e.target.value) }} />

        <input
        className='email'
          type="password"
          placeholder='Password'
          onChange={(e) => { setPassword(e.target.value) }} />

        <input
        className='password' 
        type="text"
        placeholder='Name'
        onChange={(e) => {setName(e.target.value)}} />  

        <button className='register-btn' type='submit'>Register</button>

        <p className='acc-non'>Don't have an account? <Link to={"/Login"}>Login</Link></p>
      </form>
    </div>


  )
}

export default Register
