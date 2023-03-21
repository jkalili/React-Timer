import "./App.css";
import { useState } from "react";

function App() {
  const handleName = () => {
    if (minCount > 0) {
      minCount--;
      setMin(minCount);
    }
  };

  let [minCount, setMin] = useState(10);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <div className="timerDiv">
        <button className="button" onClick={handleName}>
          START
        </button>

        <h2>00:</h2>
        <h2>00:</h2>
        {/* <h2>00</h2> */}

        {/* <h2>{days}</h2>
        <h2>{hours}</h2> */}
        <h2>{minCount}</h2>
      </div>
    </div>
  );
}

export default App;
