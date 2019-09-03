let person1 = {
    name: "Vinod",
    getName: function() {
        console.log(this.name);
    }
};
let person2 = {
    name: "Josline"
};

console.log(person1.__proto__); // {}

let arr = [];
let str = "Josline";
console.log(arr.__proto__); // []
console.log(str.__proto__); // [String: '']

console.log(person1.__proto__.__proto__); // null