import "./App.css";
import { Header } from "./Components/Header/Header";
import { BooksList } from "./Components/BooksList/BooksList";

function App() {
  return (
    <div className="App">
      <Header />
      <BooksList />
    </div>
  );
}

export default App;
