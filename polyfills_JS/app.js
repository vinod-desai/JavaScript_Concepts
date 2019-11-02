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

let newArray = myArray.myFilter(getOddNumbers);

console.log(myArray);
console.log(newArray);


// // Polyfill for array reduce method