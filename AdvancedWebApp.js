/* 
   Filename: AdvancedWebApp.js 
   Content: An advanced web application for managing user accounts, performing calculations, and generating reports.
*/

// User class to represent a user account
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.name} deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${this.name} withdrew $${amount}. New balance: $${this.balance}`);
      return amount;
    } else {
      console.log("Insufficient balance.");
      return 0;
    }
  }
}

// Database to store user accounts
const database = {
  users: [],
  addUser(user) {
    this.users.push(user);
    console.log(`User ${user.name} added to the database.`);
  },
  getUsers() {
    return this.users;
  }
};

// Create user accounts
const john = new User("John Doe", "john.doe@example.com", "john123");
const mary = new User("Mary Smith", "mary.smith@example.com", "mary456");

// Add users to the database
database.addUser(john);
database.addUser(mary);

// Deposit and withdraw funds
john.deposit(500);
mary.deposit(1000);
john.withdraw(200);
mary.withdraw(1500);

// Generate user account report
console.log("User Account Report:");
console.log("---------------------");

database.getUsers().forEach((user, index) => {
  console.log(`User ${index + 1}:`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Balance: $${user.balance}`);
  console.log("---------------------");
});

// Perform complex calculation
const complexCalculation = () => {
  let result = 0;
  for (let i = 1; i <= 1000; i++) {
    result += Math.pow(i, 3);
  }
  return result;
};

console.log(`Complex Calculation Result: ${complexCalculation()}`);

// More sophisticated code can be added here for a full-featured web application