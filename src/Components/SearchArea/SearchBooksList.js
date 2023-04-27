import React from "react";
import scss from "./SearchArea.module.scss";

export const SearchBooksList = (props) => {
  return (
    <div className={scss.dropdownWrapper}>
      <ul className={scss.dropdownMenu}>
        {props.books.map((item, index) => (
          <li className={scss.dropdownItem} key={item + index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
