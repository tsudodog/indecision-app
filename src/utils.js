
console.log('utils.js is running');


const square = (x) => x*x;

const add = (a, b) => a + b;
// these are called named exports they have to be used by NAME!!
export {square, add};

// exports - default export - named exports 