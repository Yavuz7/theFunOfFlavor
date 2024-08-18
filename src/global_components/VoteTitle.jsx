//Variant of vote item specifically for Titles, has a different font size
import "./VoteTitle.scss";

//The purpose of this component is to allow for list items to have the
//vote next to them.

export default function VoteTitle({ content, votes }) {
  return (
    <div className="vote-title">
      <span>+{votes}</span>
      <h1>{content}</h1>
    </div>
  );
}
