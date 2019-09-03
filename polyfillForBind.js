// polyfill for bind method

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

// let myName = fullName.bind(person);
// myName(); // Mahendra Singh Dhoni

// Function.prototype.myBind = function(...args) {
//     let context = this;
//     return function(){
//         context.call(args[0]);
//     }
// }

// let myName1 = fullName.myBind(person);
// myName1(); // Mahendra Singh Dhoni

const fullName = function(country, state, city) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + country + ', ' + state + ', ' + city);
}

Function.prototype.myBind = function(...args) {
    let context = this;
    let argsRemaining = args.slice(1);
    return function(...args2){
        // context.call(args[0]);
        context.apply(args[0], [...argsRemaining, ...args2]);
    }
}

let myName = fullName.bind(person, 'India');
myName('Jharkhand', 'Ranchi'); // Mahendra Singh Dhoni from India, Jharkhand, Ranchi

let myName1 = fullName.myBind(person, 'India');
myName1('Jharkhand', 'Ranchi'); // Mahendra Singh Dhoni from India, Jharkhand, Ranchi