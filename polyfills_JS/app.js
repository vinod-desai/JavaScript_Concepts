let myArray = [1,2,3,4,5, 6, -6, 10];

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

// Polyfill for array map method (Higher Order Array functions)

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

// let newArray = users.myMap(userName);
// console.log(users);
// console.log(newArray);

// Polyfill for array filter method


// let newArray = myArray.filter((element) => element % 2 === 0);

Array.prototype.myFilter = function(fn){
    const filteredArray = [];
    const context = this;

    for(let i=0; i<context.length; i++){
        if(fn(context[i])){
            filteredArray.push(context[i]);
        }
        
    }
    return filteredArray;
}

const getEvenNumbers = (num) =>  num % 2 === 0 ;
const getOddNumbers = (num) => num % 2 !== 0;

// let newArray = myArray.myFilter(getOddNumbers);

// console.log(myArray);
// console.log(newArray);


// // Polyfill for array reduce method

const initValue = 0;

// let sum = myArray.reduce(function(total, currValue, index, arr){
//     // console.log(total, currValue, index, arr);
//     return total += currValue;
// }, initValue);

const add = (total, val) => total + val;

Array.prototype.myReduce = function(fn, initVal){
    let sum = 0;
    const context = this;
    for(let i=0; i<context.length; i++){
        if(i === 0){
           sum = fn(initVal, context[i]);
        } else {
           sum = fn(sum, context[i]);
        }
        
    }
    return sum;
}

let sum = myArray.myReduce(add, 0);

console.log(myArray);
console.log(sum);