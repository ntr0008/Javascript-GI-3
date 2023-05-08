//////////////////////////////////  EASY  /////////////////////////////////
function exercise(x) {
  if (x == "swimming") {
    console.log("Today's exercise: swimming");
  } else if (x == "running") {
    console.log("Today's exercise: running");
  }
}

exercise("running");
exercise("swimming");

///////////////////////////  MEDIUM  ////////////////////////////////////
function cutPizzaSlices(slices) {
  pizza = function sharePizza(people) {
    return slices / people;
  };
  return pizza;
}

let sharePizza = cutPizzaSlices(8);
console.log(`Each person gets ${sharePizza(3)} slices of pizza`);

// //////////////  Hard  ////////////////////////
class Pii {
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  getName() {
    return this.name;
  }
}

const nickRice = new Pii("Nicholas", "123323212");

console.log(nickRice.getName());

/////////////////////////  VERY HARD  /////////////////////////////
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Running is fun! - said no one ever");
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, langauges) {
    super(name, job, age, langauges);
    this.langauges = langauges;
    this.isBusy = true;
  }

  completeTask() {
    this.isBusy = false;
  }

  acceptNewTask() {
    this.isBusy = true;
  }

  offerNewTask() {
    if (this.isBusy == true) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility`);
    }
  }
}

const nicholas = new Programmer("Nicholas", "Gamer");

nicholas.exercise();
nicholas.fetchJob("Nicholas", "Gamer");
nicholas.offerNewTask();
