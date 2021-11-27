var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
console.log("Loop traditional.");
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("------------------------------");
// Let´s use the simplied for loop
console.log("Loop simplied.");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSportsOne = sportsOne_1[_i];
    console.log(tempSportsOne);
}
console.log("------------------------------");
// Loop conditional
console.log("Conditional loop");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSportsOne = sportsOne_2[_a];
    if (tempSportsOne == "Cricket") {
        console.log(tempSportsOne + "<< My favorite");
    }
    else {
        console.log(tempSportsOne);
    }
}
