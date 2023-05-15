import { About } from "./Pages/About/About";
import { ProductBookCard } from "./Pages/ProductBookCard/ProductBookCard";
import { Page404 } from "./Pages/Page404/Page404";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="books/:id" element={<ProductBookCard />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
