import { About } from "./Pages/About/About";
import { ProductBookCard } from "./Pages/ProductBookCard/ProductBookCard";
import { Page404 } from "./Pages/Page404/Page404";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { Home } from "./Pages/Home/Home";
import { SignIn } from "./Components/googleSignIn/SignIn";
import { Books } from "./Components/Books/Books";
import { SearchBooksList } from "./Components/SearchArea/SearchBooksList";
import { BookCard } from "./Components/BookCard/BookCard";
import { BooksList } from "./Components/BooksList/BooksList";

function App() {
  return (
    <>
      <AuthContextProvider provider>
        <Routes>
          <Route path="/" element={<Home />} forceRefresh={true}>
            <Route path="search" element={<Books />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="signin" element={<SignIn />}></Route>
            <Route path="books/:id" element={<ProductBookCard />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
