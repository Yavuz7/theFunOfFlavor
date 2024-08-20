import Suggestions from "../Suggestions/Suggestions";

export default function HomePage() {
  //Use effect hook or custom hook to grab JUST suggestions for the appropriate page
  return (
    <>
      <div className="column-container">
        <section className="recipe space-for-nav">
          <h2>A Different Kind Of Recipe Site</h2>
          <ol>
            <li>Modular Recipe Pieces</li>
            <li>Suggest Changes On Any Recipe</li>
            <li>1 Tsp Of Salt</li>
          </ol>
          <button className="action-button">Explore The Recip-bilities</button>
        </section>
        <Suggestions pageId={0} />
        <div className="spacer"></div>
      </div>
    </>
  );
}
