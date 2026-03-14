import { useState } from "react"
import React from 'react'

const Av5 = () => {

  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)
  const [number3, setNumber3] = useState(null)
  const [number4, setNumber4] = useState(null)
  const [number5, setNumber5] = useState(null)
  
    const sum = eval(parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5)) / 5


  return (
    <div className='div1'>
     <div className='divAv5'>
      
      <section className='avfirst2'>
         <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber1(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>
      <section className='avsecond2'>
        <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber2(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>

      <div className="part2">
      <section className='avsecond2'>
        <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber3(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>
      <section className='avsecond2'>
        <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber4(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>
      <section className='avsecond2'>
        <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber5(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>

      </div>

      
      </div>

      <section className='sum'>{sum}</section>
{/* 
      <button onClick={handleCal} className='cal'>Calculate</button> */}
    </div>
  )
}

export default Av5
