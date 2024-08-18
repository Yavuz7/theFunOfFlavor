import "./app_style.scss";
import VoteItem from "../global_components/VoteItem";
import VoteTitle from "../global_components/VoteTitle";

function App() {
  return (
    <>
      <nav>
        <VoteTitle content={"The Fun Of Flavors"} votes={12} />
        <div className="nav-buttons">
          <a>Recipes</a>
          <a>My Account</a>
          <a>Settings</a>
        </div>
      </nav>
      <div className="column-container">
        <section className="recipe">
          <h2>A Different Kind Of Recipe Site</h2>
          <ol>
            <li>Modular Recipe Pieces</li>
            <li>Suggest Changes On Any Recipe</li>
            <li>1 Tsp Of Salt</li>
          </ol>
          <button className="action-button">Explore The Recip-bilities</button>
        </section>
        <section className="suggestions">
          <div>
            <h2>Suggestions:</h2>
            <span className="add-suggestion">+Add Suggestion</span>
          </div>
          <ol>
            <VoteItem content={"Have Fun Trying New Recipes"} votes={12} />
            <VoteItem content={"Share Your Wisdom Of Food"} votes={16} />
            <VoteItem content={"1 Tsp Of Paprika"} votes={2} />
          </ol>
        </section>
        <div className="spacer"></div>
      </div>
    </>
  );
}

export default App;
