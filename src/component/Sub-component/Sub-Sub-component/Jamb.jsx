import React, { useEffect, useState } from "react";

const jamb = () => {
  const [score, setScore] = useState(0)
  const [submit, setSubmit] = useState(false)
  const questions = [
    {
      id: 1,
      question: "What's my name",
      options: [
        {
          id: "a",
          answer: "Ava",
        },
        {
          id: "b",
          answer: "rase",
        },
        {
          id: "c",
          answer: "hina",
        },
      ],
      correctAnswer: "c",
    },

    {
      id: 2,
      question: "What's your name",
      options: [
        {
          id: "a",
          answer: "Ava",
        },
        {
          id: "b",
          answer: "rase",
        },
        {
          id: "c",
          answer: "hina",
        },
      ],
      correctAnswer: "b",
    },
  ];

  const handleScore = (quesId, optionId) => {
    const question = questions.find((ques) => {
      return ques.id === quesId
    })
    if (!question) {
      alert("question not found")
      return
    }

    if (question.correctAnswer === optionId) {
      setScore(prev => prev + 1)

    } else {
      console.log("Not correct")

    }
  };

  // const submit = () => {
  //   return <p>{score}</p>
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmit(true)
  }

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>
          <p className="in">{q.question}</p>
          {q.options.map((option) => (
          <>
            {/* <button key={id} className="qqq">
            {option.answer}
            </button> */}
              <label key={option} style={{ display: "block" }}>
                {option.answer}
              </label>
              <input
                type="radio"
                value={option.id}
                id={option.id}
                name={q.id}
                // onChange={(e) => (setGood(e.target.value))}
                onClick={() => handleScore(q.id, option.id)}
              />
            </>
          ))}
        </div>
      ))}
      {/* <button onClick={setSubmit(true)}>Submit</button> */}

      {/* <button type="submit" onSubmit={handleSubmit} onClick={setSubmit(true)}>Submit</button>



      {submit ? {score} : <p>nope</p>} */}

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      {/* <p>{score}</p> */}
      {submit ? <p>{score}out of 2}</p> : <p></p>}
      {submit ? <p>{(score/2) * 100}</p> : <p>{(score/2)*100}%</p>}
    </div>
  );
};

export default jamb;
