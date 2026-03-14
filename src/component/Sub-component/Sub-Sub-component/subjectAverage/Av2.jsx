import React, { useState } from 'react'

const Av2 = () => {

  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)

  const sum = eval(parseInt(number1) + parseInt(number2)) / 2

  // const handleCal = (sum) => {
  //   return sum;
  // }

  return (
    <div className='div1'>
     <div className='divAv2'>
      
      <section className='avfirst2'>
         <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber1(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>
      <section className='avsecond2'>
        <input className='sub' type="text" placeholder='Enter subject' />
        <input onChange={(e) => {setNumber2(e.target.value)}} className='sco' type="number" placeholder='Enter score' />
      </section>

      
      </div>

      <section className='sum'>{sum}</section>
{/* 
      <button onClick={handleCal} className='cal'>Calculate</button> */}
    </div>
  )
}

export default Av2

