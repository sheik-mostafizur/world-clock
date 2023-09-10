import DisplayLocalDateTime from "./components/DisplayLocalDateTime";
import "./App.scss";

function App() {
  return (
    <div>
      <h1 className="world-clock-heading">World Clock</h1>

      <DisplayLocalDateTime />
    </div>
  );
}

export default App;
