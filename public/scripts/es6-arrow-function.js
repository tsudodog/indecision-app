'use strict';

var square = function square(x) {
    return x * x;
};

function squareES5(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x*x;
// }

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(2));
console.log(squareArrow(4));
console.log(squareES5(1));

// Challenge - Use Arrow Functions

var getFirstName = function getFirstName(s) {
    return s.split(' ')[0];
};

var getFirstNameS = function getFirstNameS(s) {
    return s.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameS('Mike Smith'));
