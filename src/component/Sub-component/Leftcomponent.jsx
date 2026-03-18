import React, { useEffect, useState } from 'react'
import Quote from './Sub-Sub-component/Quote'
import { Link, useNavigate } from "react-router-dom"
import Time from './Sub-Sub-component/Time'
import Logout from '../../utils/Logout'


const Leftcomponent = () => {
  const navigate = useNavigate()
  const [quote, setQuote] = useState(null)

  const handleQuote = () => {
    navigate("/quote")
  }

  const handletime = () => {
    navigate("/time")
  }

  const handleAverage = () => {
    navigate("/average")
  }

  const handledashboard = () => {
    navigate("/dashboard")
  }

  const handleimprovement = () => {
    navigate("/improvement")
  }

  const handleread = () => {
    navigate("/read")
  }

  
const [menu, setMenu] = useState(false)

const handleHarm = () => {
  setMenu(!menu)
}


  return (
    <>
    <div className={menu ? "nav-bar.active" : "nav-bar"}>
    {/* <div className='nav-bar'> */}
      <button className='left-img' onClick={handledashboard}><img src="/dashboard.png" alt="" className='left-img' />Dashboard</button>
      <button className='left-img' onClick={handleimprovement}><img src="/improvement.png" alt="" className='left-img' />Improvement</button>
      <button className='left-img' onClick={handleQuote}><img src="quote.gif" alt="" className='left-img' />Quotes</button>
      <button className='left-img' onClick={handletime}><img src="/time.png" alt="" className='left-img' />Timer</button>
      <button className='left-img' onClick={handleread}><img src="/icons8-reading-time-64.png" alt="" className='left-img' />Reading section</button>
      <button className='left-img' onClick={handleAverage}><img src="/average.png" alt="" className='left-img' />DGP/Average section</button>
      <Logout />

    {/* </div> */}
    </div>
    
    <button className="harm" onClick={handleHarm}> &#9776; </button>
    <button className='delete'>X</button>
    
    </>
  )
}

export default Leftcomponent
