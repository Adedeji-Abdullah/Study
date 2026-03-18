import React, { useEffect, useState } from "react";

const Time = () => {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (running && count > 0) {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    if (running && count === 0) {
      const audio = new Audio("/alarm.wav");
      audio.play();
    }

    return () => clearInterval(interval);
  }, [count, running]);

  const handleStart = () => {
    setRunning(true);
  };
  const min = count / 60;
  const sec = count % 60;

  return (
    <div className="timer">
      <img src="/time.png" alt="clock" className="clock" />
      <input
        className="settime"
        type="number"
        placeholder="enter minute"
        onChange={(e) => {
          setCount(e.target.value * 60);
        }}
      />
      <p>
        {Math.floor(min)}:{sec}
      </p>
      <button className="min" onClick={handleStart}>
        start timer
      </button>
    </div>
  );
};

export default Time;
