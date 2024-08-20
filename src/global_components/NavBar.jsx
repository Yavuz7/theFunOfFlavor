import { Routes, Route, Link } from "react-router-dom";

import SearchPage from "../features/SearchPage/SearchPage";
import AccountPage from "../features/AccountPage.jsx/AccountPage";
import HomePage from "../features/HomePage/HomePage";

import "./NavBar.scss";

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
          <Link to="/search">My Account</Link>
          <a>Settings</a>
        </div>
      </nav>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/recipes/*" element={<SearchPage />} />
        <Route path="/search/*" element={<AccountPage />} />
      </Routes>
    </>
  );
}
