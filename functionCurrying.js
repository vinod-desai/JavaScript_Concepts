// using bind method

// let multiply = function(a, b) {
//     console.log(a*b);
// }
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5); // 10

// multiplyByTwo = multiply.bind(this, 2, 7);
// multiplyByTwo(5); // 14

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5); // 15

// using Closure
let multiply = function(a) {
    return function(b){
        console.log(a*b);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(7); // 14
let multiplyByThree = multiply(3);
multiplyByThree(6); // 18