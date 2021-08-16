"use strict";
//Basic Types
// number
function add(a, b) {
    return a + b;
}
var addition = add(1, 2);
console.log(addition);
// string
function concat(a, b) {
    return a + b;
}
var concatination = concat("Aayush ", "Bhatnagar");
console.log(concatination);
// boolean
var boo = true;
console.log(boo);
// object
var my = {
    name: "Aayush Bhatnagar",
    age: 22,
    pos: [1, "Associate Devloper"]
};
// array
var activities = ["playing video games", "watching anime", "badminton"];
for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
    var activity = activities_1[_i];
    console.log(activity);
}
// tuple
var video = {
    name: ["Playstation", 5],
    brand: "Sony"
};
// video.name[0]=123123;
video.name.push("\nXbox Series X");
// enum -- where we give value to these names, default way is first value points to 0 and then 1,2,3,4 , we can change value anywhere and then the next will be incremented from there
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SYSADMIN"] = 1] = "SYSADMIN";
    Role[Role["DEVELOPER"] = 10000] = "DEVELOPER";
    Role[Role["TESTER"] = 10001] = "TESTER";
    Role[Role["LEAD"] = 10002] = "LEAD";
})(Role || (Role = {}));
;
console.log(Role);
// union types
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine("Yo ", "Hi"));
// literal types
function addFormat(a, b, c) {
    if (c === "as-text") {
        return (a + b).toString();
    }
    return a + b;
}
console.log(addFormat(10, 20, "as-number"));
console.log(addFormat(10, 20, "as-text"));
var game = "God of War";
console.log(game);
game = 123;
console.log(game);
// function return type
// making function which must return string
function subtract(a, b) {
    return (a - b).toString();
}
console.log(subtract(100, 10));
// function type
function multiply(a, b) {
    return a * b;
}
// let into;
// into=multiply;
// into=10
var into;
into = multiply;
console.log(into(10, 20));
// function types and callbacks
function addHandler(a, b, c) {
    var result = a + b;
    var x = c(result);
    return x;
}
console.log(addHandler(10, 20, function (result) {
    console.log(result);
    return result * 10;
}));
