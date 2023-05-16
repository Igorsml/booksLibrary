import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user);
      localStorage.setItem("email", data.user);
    });
  };

  console.log(value);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )}

      {value && (
        <div>
          <p>Hello, {value?.displayName}</p>
          <img src={value?.photoURL} alt="user avatar" />
        </div>
      )}
    </div>
  );
};
