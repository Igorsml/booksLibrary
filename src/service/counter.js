import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  get total() {
    return `total: ${this.count}`;
  }
}

const counter = new Counter();
export default counter;
