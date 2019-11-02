// Polyfill for array map method (Higher Order Array functions)

let myArray = [1,2,3,4,5];

const double = (item) => item * 2;
const triple = (item) => item * 3;
const minusOne = (item) => item - 1;

const users = [
    {name: 'Josline', company: 'Oracle'},
    {name: 'Ramya', company: 'MicroSoft'},
    {name: 'Kajal', company: 'Adobe'},
    {name: 'Rakshita', company: 'Tesla'}
];

const userName = (user) => user.name;

// let newArray = myArray.map(double);

// function double(item){
//     return item * 2;
// }

Array.prototype.myMap = function (fn) {
    const mappedArray = [];
    const context = this;

    for (let i = 0; i < context.length; i++) {
        mappedArray.push(fn(context[i]));
    }

    return mappedArray;
}
// let newArray = myArray.myMap(minusOne);
// console.log(myArray);
// console.log(newArray);

let newArray = users.myMap(userName);
console.log(users);
console.log(newArray);

// Polyfill for array filter method


// // Polyfill for array reduce method