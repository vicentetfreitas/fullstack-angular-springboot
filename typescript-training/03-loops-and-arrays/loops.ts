//Creating Loops and Arrays - Write Some Code - Part 1 and Part 2

console.log();
console.log("Array: ");
let reviews: number[] = [5, 4.5, 1, 3];
console.log(reviews);
console.log("------------------------");
console.log();
console.log("For Loop: ");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("------------------------");

console.log();
console.log("For Loop - Array of numbers");
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
}

console.log("------------------------");
console.log();
console.log("For Loop - Compute Average");
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i]; // Same as: total = total + reviews[i]
}
let average: number = total / reviews.length;
console.log(`Review average = ${average}`);

console.log("------------------------");
console.log();
console.log("Simplified Array");
let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let i = 0; i < sportsOne.length; i++) {
  console.log(i + "-" + sportsOne[i]);
}

console.log("------------------------");
console.log();
console.log("Simplified For Loop");
for (let tempSport of sportsOne) {
  console.log(tempSport);
}

console.log("------------------------");
console.log();
console.log("Conditionals");
for (let tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log(tempSport + " << My Favorite!");
  } else {
    console.log(tempSport);
  }
}

console.log("------------------------");
console.log();
console.log("Growable Arrays");
let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball"); // Add elements
sportsTwo.push("Football");
for (let tempSportTwo of sportsTwo) {
  console.log(tempSportTwo);
}
