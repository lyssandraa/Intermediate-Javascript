// importing chalk //
import chalk from "chalk";
class customer {
  constructor(name, cash) {
    this.name = name;
    this.cash = cash;
  }
}

// declaring class //
class cafeTill {
  constructor() {
    this.menu = {
      Latte: 6.5,
      "Caramel Latte": 7.0,
      Macchiato: 7.5,
      "Caramel Macchiato": 8.0,
    };
    this.order = [];
  }

  // method to add a drink to the order //
  addDrink(drinkName) {
    // check if drink is in the menu //
    if (this.menu.hasOwnProperty(drinkName)) {
      // add the drink to the order //
      this.order.push(drinkName);
      return `${drinkName} added to the order`;
    } else {
      // if the drink is not in the menu, throw an error //
      return `${drinkName} is not available in the menu`;
    }
  }

  // method to calculate the total price of the order //
  calculateTotal() {
    // initialise total price to 0 //
    let total = 0;
    // loop through each drink in the order //
    for (let drink of this.order) {
      // add the price of the drink to the total //
      total += this.menu[drink];
    }
    return total;
  }

  // example usage //

  //   const till = new cafeTill();
  //   console.log(till.addDrink("Espresso"));
  //   console.log(till.addDrink("Latte"));
  //   console.log(till.addDrink("Caramel Latte"));
  //   console.log(`Total: $${till.calculateTotal()}`);

  // method to check if the customer can afford the order //

  affordOrder(customer) {
    const total = this.calculateTotal();
    if (customer.cash >= total) {
      return `${customer.name} can afford the order. Total: ${total}`;
    } else {
      return `${customer.name} cannot afford the order. Total: ${total}, Cash: ${customer.cash}`;
    }
  }
}

// example usage //
// styling with chalk //

const till = new cafeTill();
const newCustomer = new customer("Charles Leclerc", 10.0);
console.log(chalk.bold.magenta(till.addDrink("Espresso")));
console.log(chalk.bold.blue(till.addDrink("Caramel Latte")));
console.log(chalk.bold.cyan(till.addDrink("Caramel Macchiato")));
console.log(chalk.bold.red(till.affordOrder(newCustomer)));

// tested to see if chalk works //
// console.log(chalk.blue("Hello world!"));
