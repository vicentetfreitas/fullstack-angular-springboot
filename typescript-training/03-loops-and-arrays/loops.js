/**
 * For Loop
 * >
 *
 * For Loop - Array of numbers
 * >
 *
 * For Loop - Compute Average
 * >
 *
 * Arrays
 * >
 *
 * Simplified For Loop
 * >
 *
 * Conditionals
 * >
 */
console.log();
console.log("Array: ");
var reviews = [5, 4.5, 1, 3];
console.log(reviews);
console.log("------------------------");
console.log();
console.log("For Loop: ");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("------------------------");
console.log();
console.log("For Loop - Array of numbers");
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
console.log("------------------------");
console.log();
console.log("For Loop - Compute Average");
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i]; // Same as: total = total + reviews[i]
}
var average = total / reviews.length;
console.log("Review average = " + average);
console.log("------------------------");
console.log();
console.log("Simplified Array");
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(i + "-" + sportsOne[i]);
}
console.log("------------------------");
console.log();
console.log("Simplified For Loop");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
console.log("------------------------");
console.log();
console.log("Conditionals");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
console.log("------------------------");
console.log();
console.log("Growable Arrays");
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball"); // Add elements
sportsTwo.push("Football");
for (var _b = 0, sportsTwo_1 = sportsTwo; _b < sportsTwo_1.length; _b++) {
    var tempSportTwo = sportsTwo_1[_b];
    console.log(tempSportTwo);
}
