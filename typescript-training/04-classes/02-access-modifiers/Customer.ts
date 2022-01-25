class Customer {
  private _firstName: string;
  private _lastName: string;

  // created constructor
  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

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

// Do not generate a .js file if here is a compilation error
//  tsc --noEmitOnError NameFile.ts
//  tsc --target ES5 --noEmitOnError NameFile.ts