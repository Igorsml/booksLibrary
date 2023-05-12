import { Outlet } from "react-router-dom";
import scss from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Books } from "../Books/Books";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
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
