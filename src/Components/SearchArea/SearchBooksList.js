import React from "react";
import scss from "./SearchArea.module.scss";
import cn from "classnames";

export const SearchBooksList = (props) => {
  return (
    <div className={scss.dropdownWrapper}>
      <ul className="dropdown-menu show">
        {props.books.map((item, index) => (
          <li className="dropdown-item" key={item + index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
