import "./App.css";
import { Header } from "./Components/Header/Header";
import AutoCompleteBooks from "./Components/Books/Books";

function App() {
  return (
    <div className="App">
      <Header />
      <AutoCompleteBooks />
    </div>
  );
}

export default App;
