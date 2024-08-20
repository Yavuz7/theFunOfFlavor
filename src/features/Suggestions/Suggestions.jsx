import VoteItem from "../../global_components/VoteItem";
import { useEffect } from "react";

export default function Suggestions({ pageId }) {
  return (
    <section className="suggestions space-for-nav">
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
  );
}
