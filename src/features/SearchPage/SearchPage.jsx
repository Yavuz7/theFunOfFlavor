import { useGetRecipesQuery } from "../../app/mainApi";

export default function SearchPage() {
  const { data, error, isLoading } = useGetRecipesQuery();

  console.log({ data });

  if (data) {
    return (
      <section className="space-for-nav">
        <h2>Hi Search</h2>
        {isLoading ? (
          <h2>Now Loading</h2>
        ) : data ? (
          data.map((recipe) => (
            <li key={recipe.ID}>
              {recipe.Recipe_Name} {recipe.Votes}
            </li>
          ))
        ) : (
          <h2>No data available at this time</h2>
        )}
      </section>
    );
  }
}
