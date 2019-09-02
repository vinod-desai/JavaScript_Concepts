// call, apply, bind methods
// let person = {
//     firstName: 'Mahendra Singh',
//     lastName: 'Dhoni',
//     fullName: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }
// person.fullName(); // Mahendra Singh Dhoni

// let person2 = {
//     firstName: 'Virat',
//     lastName: 'Kohli'    
// }

// person.fullName.call(person2); // Virat Kohli

let person = {
    firstName: 'Mahendra Singh',
    lastName: 'Dhoni'
}

let person2 = {
    firstName: 'Virat',
    lastName: 'Kohli'    
}

// const fullName = function() {
//     console.log(this.firstName + ' ' + this.lastName);
// }
// fullName.call(person); // Mahendra Singh Dhoni
// fullName.call(person2); // Virat Kohli

// const fullName = function(country, state, city) {
//     console.log(this.firstName + ' ' + this.lastName + ' from ' + country + ', ' + state + ', ' + city);
// }
// fullName.call(person, 'India', 'Jharkhand', 'Ranchi'); // Mahendra Singh Dhoni from India, Jharkhand, Ranchi

// function borrowing
const fullName = function(country, state, city) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + country + ', ' + state + ', ' + city);
}
fullName.apply(person, ['India', 'Jharkhand', 'Ranchi']); // Mahendra Singh Dhoni from India, Jharkhand, Ranchi

const myName = fullName.bind(person, 'India', 'Jharkhand', 'Ranchi');

console.log(myName); // [Function: bound fullName]
myName(); // Mahendra Singh Dhoni from India, Jharkhand, Ranchi

