import React from "react";
import scss from "./Header.module.scss";
import "../../Pages/Home/Home.module.scss";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";
import { UserAuth } from "../../Context/AuthContext";
import { NavLink, Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    navigate(0);
  };

  const handleSignOut = () => {
    try {
      logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className={scss.headerContainer}>
      <Link onClick={goHome}>
        <SvgLogo className={scss.headerLogo} />
      </Link>
      <h1 className={scss.headerTitle}>Books Library</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/my-books">My books</NavLink>
      {user && (
        <Link to="/signin">
          <img
            className={scss.headerUserAvatar}
            src={user?.photoURL}
            alt="user avatar"
          />
        </Link>
      )}
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <NavLink to="/signin">Login</NavLink>
      )}
    </header>
  );
};
