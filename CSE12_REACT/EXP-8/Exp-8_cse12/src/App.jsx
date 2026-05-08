




//exp8
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;