let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

console.log("Loop traditional.");

for (let i = 0; i < sportsOne.length; i++) {
  console.log(sportsOne[i]);
}
console.log("------------------------------")
// Let´s use the simplied for loop
console.log("Loop simplied.");
for (let tempSportsOne of sportsOne) {
  console.log(tempSportsOne);
}

console.log("------------------------------")
// Loop conditional
console.log("Conditional loop");
for (let tempSportsOne of sportsOne) {
  if (tempSportsOne == "Cricket") {
    console.log(tempSportsOne + "<< My favorite");
  }else{
    console.log(tempSportsOne);
  }
}
