import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let time = 0
  let [secCount, setSec] = useState(time);
  let [minCount, setMin] = useState(time);
  let [hourCount, setHour] = useState(time);

  if (secCount === 60){
    minCount = minCount+1
    secCount = 0
    setMin(minCount)
    setSec(secCount)
  }

  if (minCount === 60) {
    hourCount = hourCount+1
    minCount = 0
    setHour(hourCount)
    setMin(minCount)
  }

  useEffect (() => {
    const myInterval = setInterval(() => {
      setSec((secCount) => secCount+1);
    }, 1000);
    return () => clearInterval(myInterval);
    }, []);
 

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="timerDiv">
        <h2>{hourCount}</h2>
        <h2>:</h2>
        <h2>{minCount}</h2>
        <h2>:</h2>
        <h2>{secCount}</h2>
      </div>
    </div>
  );
}

export default App;
