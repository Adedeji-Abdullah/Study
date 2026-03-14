import React, { useState } from 'react'
import Av2 from './subjectAverage/Av2'
import Av3 from './subjectAverage/Av3'
import Av5 from './subjectAverage/Av5'
import Av10 from './subjectAverage/Av10'
import Av15 from './subjectAverage/Av15'
import { useNavigate } from 'react-router-dom'

const Average = () => {
  const [inputi,setInputi] = useState(0)
  const navigate = useNavigate()


  const han2 = () => {
    navigate('/av2')
  }

  const han3 = () => {
    navigate('/av3')
  }

  const han5 = () => {
    navigate('/av5')
  }

  const han10 = () => {
    navigate('/av10')
  }

  const han15 = () => {
    navigate('/av15')
  }

  return (
    <div>
      <button onClick={han15}>Check average of 15 subjects</button>
      <button onClick={han10}>Check average of 10 subjects</button>
      <button onClick={han5}>Check average of 5 subjects</button>
      <button onClick={han3}>Check average of 3 subjects</button>
      <button onClick={han2}>Check average of 2 subjects</button>
    </div>
  )
}

export default Average
