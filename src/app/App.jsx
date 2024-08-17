import { useState } from "react";
import "./app_style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>the fun of flavor</h1>
      <div className="column-container">
        <div className="column">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="column">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
