import { Link } from "react-router-dom";
import scss from "../Pages.module.scss";
import page404 from "../../Components/assets/404.png";

export const Page404 = () => {
  return (
    <div className={scss.pagesWrapper}>
      <p>
        This page doesn't exist. Go <Link to="/">home</Link>.
      </p>
      <img src={page404} alt="page 404" />
    </div>
  );
};
