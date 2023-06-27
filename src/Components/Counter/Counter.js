import scss from "./Counter.module.scss";
import React from "react";

export const Counter = (props) => {
  return (
    <div className={scss.counterContainer}>
      <button
        className={scss.btn}
        onClick={() => {
          props?.handleFavorite(props?.bookId);
        }}
      >
        ➕
      </button>
      {props.booksCount > 0 && (
        <button
          className={scss.btn}
          onClick={() => {
            props?.handleFavoriteRemove(props?.bookId);
          }}
        >
          ➖
        </button>
      )}
    </div>
  );
};
