import { useState } from "react";
import "./app_style.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h2>the fun of flavors</h2>
      </nav>
      <div className="column-container">
        <section className="recipe">
          <h2>A Different Kind Of Recipe Site</h2>
          <ol>
            <li>Modular Recipe Pieces</li>
            <li>Suggest Changes On Any Recipe</li>
            <li>1 Tsp Of Salt</li>
          </ol>
        </section>
        <section className="suggestions">
          <h2>Suggestions</h2>
          <ol>
            <li>Have Fun Trying New Recipes</li>
            <li>Share Your Wisdom Of Food</li>
            <li>1 Tsp Of Paprika</li>
          </ol>
        </section>
        <div className="spacer"></div>
      </div>
    </>
  );
}

export default App;
