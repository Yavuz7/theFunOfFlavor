import { useSelector, useDispatch } from "react-redux";
import { setSearchResults } from "./searchPageSlice";

export default function SearchPage() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.searchPage.recipes);
  console.log(recipes);
  return (
    <section className="space-for-nav">
      <h2>Hi Search</h2>
      <p>{recipes}</p>
      <button onClick={() => dispatch(setSearchResults(["egg"]))}>Click</button>
    </section>
  );
}
