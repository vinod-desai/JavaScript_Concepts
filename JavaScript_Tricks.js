let salary = 700000;

// salary > 500000 ? Console.log('Pay 5% Tax') : console.log('No Tax');

salary > 500000 ?
    salary > 1000000 ? console.log('Pay 20% Tax')
    : console.log('Pay 5% Tax') : console.log('No Tax');

// const id = 12345;
const id = 12345 + '';
console.log(typeof id);

const users = Array(10).fill('Josline');
users.length = 5;
console.log(users);
console.log(Array.from(new Set(users)));

// Dynamic Properties in Objects
const company = 'Organization';
const user = {
    'firstName' : 'Josline',
    'lastName': 'M',
    [company] : 'Oracle'
};
console.log(user);

// Slicing Array
const myArray = [1, 2, 'Test', 'Jessy', 1213, 54645, {}, user];
// console.log(myArray.length);
// myArray.length = 4;
console.log(myArray.slice(-4));

// Array To Objects
const myObj = { ...myArray };
console.log(myObj);

// Object to Array
console.log(Object.keys(user));
console.log(Object.values(user));

// Performance (run in Browser)
let startedAt = performance.now();
for(let i= 0; i< 1000000; i++){
    
}
let endedAt = performance.now();

console.log(startedAt - endedAt);