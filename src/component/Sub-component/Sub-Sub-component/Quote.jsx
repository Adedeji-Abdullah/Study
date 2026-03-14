import React, { useEffect, useState } from 'react'
import encourage from './quo'

const Quote = () => {

  const random = Math.random()
  const rounded = Math.floor(random * 17)
  const final = encourage[rounded]

  return (
    <div className='today-quote'>
      <h1 className='head-quote'>Get today's quote that may keep you moving forward</h1>
      <section>
        <p className='qouted'><span className='quote-box'>&ldquo;</span>{final}.<span className='quote-box'>&rdquo;</span></p>
      </section>
    </div>
  )
}

export default Quote
