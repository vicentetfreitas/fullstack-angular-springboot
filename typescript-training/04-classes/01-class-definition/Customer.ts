// Define Customer Class
class Customer {
  firstName: string;
  lastName: string;
  // Defined a constructor
  // created constructor
  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

//let´s create an instance

let myCustomer = new Customer("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
