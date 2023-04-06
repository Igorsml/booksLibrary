import React from "react";

export const ListItems = (props) => {
  return (
    <ul className="dropdown-menu show">
      {props.books.map((item, index) => (
        <li className="dropdown-item" key={item + index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
