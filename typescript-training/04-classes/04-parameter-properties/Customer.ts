class Customer {
  // created constructor
  constructor(private _firstName: string, private _lastName: string) {}

   get firstName(): string {
    return this._firstName;
  }
   set firstName(value: string) {
    this._firstName = value;
  }

   get lastName() {
    return this._lastName;
  }
   set lastName(value: string) {
    this._lastName = value;
  }
}

//let´s create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

// Removed archive typescript
// tsc --build --clean
// Create archive tsconfig.json
// tsc --init