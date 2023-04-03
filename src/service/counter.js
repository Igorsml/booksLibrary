import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  onHandleClick() {
    this.count += this.props.bookPageCount;
  }

  decrement() {
    this.count -= 1;
  }
}

const counter = new Counter();
export default counter;
