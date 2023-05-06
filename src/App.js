import { Header } from "./Components/Header/Header";
import { Books } from "./Components/Books/Books";
import { Footer } from "./Components/Footer/Footer";
import scss from "./index.module.scss";

function App() {
  return (
    <>
      <div className={scss.Layout}>
        <Header />
        <Books />
        <Footer />
      </div>
    </>
  );
}

export default App;
