import css from "./Counter.module.css";
import counter from "../../service/counter.js";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
  return (
    <div className={css.counterContainer}>
      {counter.total}
      <div className={css.counterButtons}>
        <button className={css.btn} onClick={() => counter.decrement()}>
          -
        </button>
        <button className={css.btn} onClick={() => counter.increment()}>
          +
        </button>
      </div>
    </div>
  );
});
