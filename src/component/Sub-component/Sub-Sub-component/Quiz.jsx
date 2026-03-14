import React, { useEffect, useState } from 'react'
// import { data } from 'react-router-dom'

const Quiz = () => {

    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)

     const fet = async() => {
        try {
           await fetch("https://the-trivia-api.com/v2/questions?limit=10&categories=science")
           .then(res => res.json())
           .then(data => setQuestions(data))
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    fet()

    }, [])

          console.log(Array.isArray(questions))

          const handlesub = (selected, correct) => {
            if (selected === correct) {
              alert("currect")
              setScore((prev) => prev + 1)
              
            } else {
              alert("Failed")
              setScore((prev) => prev - 1)
            }
          } 
    
  return (
    <div className='whoe'>
      <h1 className='in qui'>Take a Quiz</h1>
      {questions.map((q, index) => {
        const options = [...q.incorrectAnswers,q.correctAnswer].sort(() => Math.random() - 0.5)



        return(
          <div key={index}>
            <h3 className='com'>{q.question.text}</h3>
            {options.map((option, i) => (
              <button className='quiz-btn' onClick={() => handlesub(option, q.correctAnswer)} key={i}>
                
                {option}
              </button>
            ))}
          </div>
        )
      })}

      <h2>{score}</h2>
    </div>
  )
}

export default Quiz
