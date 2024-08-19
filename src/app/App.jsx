import HomePage from "../features/HomePage/HomePage";
import NavBar from "../global_components/NavBar";
import "./app_style.scss";

function App() {
  return (
    <>
      <NavBar content={"The Fun Of Flavor"} votes={12} />
    </>
  );
}

export default App;
