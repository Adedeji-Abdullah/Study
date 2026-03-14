import React, { useEffect, useState } from 'react'
import { account } from '../../appwrite'
import { useNavigate } from 'react-router-dom'



const Rightcomponent = () => {
  const navigate = useNavigate()

  const [name, setName] = useState(null)

  useEffect(() => {
    console.log('Here in right')
    account.get()
    .then(user => setName(user.name))
    .catch((err) => {
    setName("")
    })
},[])

const handleJamb = () => {
  navigate('/qot')
}

const handleExam = () => {
  navigate('/exam')
}

const handleQuiz = () => {
  navigate('/quiz')
}

  return (
    <div className='right-hand-side'>
      <section className='welcome'>
        <h1>Welcome back, {name}!!!</h1>
        <p className='plan'>plan your day</p>
        <img className='first-png' src="/person.png" alt="" />
      </section>

      <section className='special'>
        <dl className='Exam'>
          <img src="" alt="book" />
          <button onClick={handleExam}>Set Exam</button>
        </dl>
        <dl>
          <img src="" alt="Clock" />
          <button>You have a test?</button>
        </dl>
        <dl>
          <img src="" alt="book" />
          <button onClick={handleQuiz}>Quiz</button>
        </dl>
        <dl>
          <img src="" alt="jamb" />
          <button onClick={handleJamb}>Jamb CBT practice</button>
        </dl>
      </section>
    </div>
  )
}

export default Rightcomponent
