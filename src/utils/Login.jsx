import React, { useEffect, useState } from 'react'
import { Link, Navigate, Route, useNavigate } from 'react-router-dom'
import { account } from '../appwrite'
import Register from './Register'
import Logout from './Logout'
import Firstpage from '../component/Firstpage'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorm, setErrorm] = useState("")

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await account.createEmailPasswordSession(
        {
          email,
          password
        }
      )
      alert("successful")

      if (alert = "successful") {
        navigate("/")
      }else{
        navigate("/")
      }

      navigate("/")
      
      
    } catch (error) {
      { account.get ? account.deleteSession('current') : alert("You should create an account first")}
      if (error.message = "Creation of a session is prohibited when a session is active.") {
        setErrorm("re-press Login")
        alert(errorm)
      } else {
        alert(error.message)
      }
    }

  }


  return (
    <>
    <div className='login-full'>
    <div className='Login-page'>
       <p className='welcome-back'><span>Welcome back to </span> student portal</p>
       <p className='login-account'>Login to access your account</p>
       <img className='person' src="/icons8-person-96.png" alt="" />
    </div>


    <form className='login' onSubmit={handleClick}>
      <h1>Login</h1>
      <input
      className='email'
        type="email"
        placeholder='Email'
        onChange={(e) => { setEmail(e.target.value) }} />

      <input
      className='password'
        type="password"
        placeholder='Password'
        onChange={(e) => { setPassword(e.target.value) }} />

      <button className='Login-btn' onClick={handleClick}>Login</button>
      
      <p>Don't have an account ? <Link to={"/Register"}>Register</Link></p>

      <Logout />
    </form>
    </div>
    </>
  )

}

export default Login
