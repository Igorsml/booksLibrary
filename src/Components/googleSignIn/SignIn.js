import React, { useEffect, useState } from "react";
import scss from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

export const SignIn = () => {
  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/signin");
    }
  }, [user]);

  return (
    <div>
      {!user && (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}

      {user && (
        <div className={scss.loginContainer}>
          <p>Hello, {user?.displayName}</p>
          <img
            className={scss.loginAvatar}
            src={user?.photoURL}
            alt="user avatar"
          />
          <button className={scss.logout} onClick={handleSignOut}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
