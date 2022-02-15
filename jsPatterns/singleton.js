let counter = 0;
let instance = 0;

class Counter {

    constructor() {
        if (instance) throw new Error("Err: Tried to create new instance of Counter!")
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
      return ++counter;
    }

    decrement() {
        return --counter;
    }
}


const singletonCounter = Object.freeze(new Counter());
module.exports =  singletonCounter;