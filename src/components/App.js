import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="main">
      <div className="date-time">{time}</div>
    </div>
  )
}

export default App;
