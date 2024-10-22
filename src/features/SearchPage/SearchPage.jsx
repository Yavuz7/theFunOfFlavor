import { useSelector, useDispatch } from "react-redux";
import { useGetRecipesQuery } from "./searchPageServices";

export default function SearchPage() {
  const { data, error, isLoading } = useGetRecipesQuery();

  console.log({ data });
  if (isLoading) {
    return <h2>Now Loading..</h2>;
  }
  if (data) {
    return (
      <section className="space-for-nav">
        <h2>Hi Search</h2>
        {data.map((recipe) => (
          <li key={recipe.ID}>
            {recipe.Recipe_Name} {recipe.Votes}
          </li>
        ))}
      </section>
    );
  }
}
