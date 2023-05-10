import scss from "./Counter.module.scss";
import React from "react";

export const Counter = (props) => {
  return (
    <div className={scss.counterContainer}>
      {
        <button
          className={scss.btn}
          onClick={() =>
            props?.bookPageCount &&
            props?.handleCountIncrement(props.bookPageCount)
          }
        >
          ➕
        </button>
      }
      <button
        className={scss.btn}
        onClick={() =>
          props?.bookPageCount &&
          props?.handleCountDecrement(props.bookPageCount)
        }
      >
        ➖
      </button>
    </div>
  );
};
