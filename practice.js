"use strict";
function add(a, b) {
    return a + b;
}
var c = 10;
var d = 11;
console.log(add(c, d));
var person = {
    name: 'aayush',
    age: 22,
    obj: {
        brand: 'sony',
        console: 'ps5'
    },
    pos: [1, "Associate Developer"]
};
person.pos.push("Wow");
var hobbies = ['playing video games', 'watching anime'];
hobbies[2] = 'dsa';
hobbies[3] = 'codeforces';
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
var tel = 'asdas';
var val = ['11', 11, 1223, 'asdad', tel];
for (var _a = 0, val_1 = val; _a < val_1.length; _a++) {
    var v = val_1[_a];
    console.log(v);
}
function clicker(message) {
    console.log("Clicked " + message);
}
var button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', clicker.bind(null, "That's right"));
