import { Outlet } from "react-router-dom";
import scss from "./Home.module.scss";
import { Header } from "../../Components/Header/Header";
import { Books } from "../../Components/Books/Books";
import { Footer } from "../../Components/Footer/Footer";

export const Home = (props) => {
  return (
    <div className={scss.layout}>
      <Header />
      <main className={scss.main}>
        <Books />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
