import React, { useEffect, useState } from "react";

const jamb = () => {
  const [good, setGood] = useState(false);
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
      id: "c",
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
      correct: "b",
    },
  ];

  const handleScore = (q, correct) => {
    if (good === q.correct) {
      setGood(true);
      alert("good")
    }
    if (good === true) {
      alert("fantastic");
    }
  };

  console.log(questions.map((q) => q.question));
  return (
    <div>
      {questions.map((q) => (
        <div key={q.index}>
          <p className="in">{q.question}</p>
          {q.options.map((options, correct) => (
            // <button key={id} className="qqq">
            //   {options.answer}
            // </button>
            <section>
              <label key={options} style={{ display: "block" }}>
                {options.answer}
              </label>
              <input
                type="radio"
                value={options.answer}
                name={options.correct}
                onChange={(e) => (setGood(e.target.value))}
                onClick={handleScore}
              />
            </section>
          ))}
        </div>
      ))}
    </div>
  );
};

export default jamb;
