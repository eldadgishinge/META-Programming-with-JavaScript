// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;

    }

    doSomethingFun() {
        this.energy -= 10;

    }

}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name = "Tom", age = 20, energy = 100) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;

    }
    goToWork() {
        this.xp += 10;
    }

}

// Task 3: Code an intern object, run methods
function intern() {
    const new_intern = new Worker("Bob", 21, 110, 0, 10);
    new_intern.goToWork();
    return new_intern;

}

// Task 4: Code a manager object, methods
function manager() {
    const new_manager = new Worker("Alice", 30, 120, 100, 30);
    new_manager.doSomethingFun();
    return new_manager;

}

const myint = intern();
console.log(myint)

const myManager = manager();
console.log(myManager);
