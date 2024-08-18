import "./VoteItem.scss";

//The purpose of this component is to allow for list items to have the
//vote next to them.

export default function VoteItem({ content, votes }) {
  return (
    <button className="vote-item vote-button">
      <span>+{votes}</span>
      <li>{content}</li>
    </button>
  );
}
