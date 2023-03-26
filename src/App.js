import "./App.css";
import { Header } from "./Components/Header/Header";
import { BooksList } from "./Components/BooksList/BooksList";
import { Books } from "./Components/Books/Books";

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <BooksList />
    </div>
  );
}

export default App;
