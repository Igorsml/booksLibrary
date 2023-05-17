import React, { useEffect, useState } from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
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

  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user);
  //     localStorage.setItem("email", data.user);
  //   });
  // };

  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);

  return (
    <div>
      {!user && (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}

      {user && (
        <ul>
          <li>
            <p>Hello, {user?.displayName}</p>
          </li>
          <li>
            <img src={user?.photoURL} alt="user avatar" />
          </li>
          <li>
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
};
