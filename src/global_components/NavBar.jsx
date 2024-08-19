import SearchPage from "../features/SearchPage/SearchPage";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../features/HomePage/HomePage";
import "./VoteTitle.scss";

export default function NavBar({ content, votes }) {
  return (
    <>
      <nav>
        <Link to="/" className="vote-title vote-button">
          <span>+{votes}</span>
          <h1>{content}</h1>
        </Link>
        <div className="nav-buttons">
          <Link to="/recipes">Recipes</Link>
          <a>My Account</a>
          <a>Settings</a>
        </div>
      </nav>

      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/recipes/*" element={<SearchPage />} />
      </Routes>
    </>
  );
}
