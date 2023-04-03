import css from "./Counter.module.css";
import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div className={css.counterContainer}>
        <div className={css.counterButtons}>
          <button className={css.btn} onClick={this.props.handleCount}>
            +
          </button>
        </div>
      </div>
    );
  }
}
