import css from "./Counter.module.scss";
import React from "react";

export const Counter = (props) => {
  return (
    <div className={css.counterContainer}>
      <button
        className={css.btn}
        onClick={() => props.handleCountIncrement(props.bookPageCount)}
      >
        ➕
      </button>
      <button
        className={css.btn}
        onClick={() => props.handleCountDecrement(props.bookPageCount)}
      >
        ➖
      </button>
    </div>
  );
};
