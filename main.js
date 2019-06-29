const result = document.getElementById("result");

/* const sum = function(a) {
  return function(b) {
    // console.log(a);
    return b ? sum(a + b) : a;
  };
}; */

const sum = a => b => (b ? sum(a + b) : a);

result.textContent = sum(1)(2)(3)(4)(5)(6)(7)();

// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
// var - has function scope
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
// Output: 4 times - Index: 4, element: undefined

// Closure
const createBase = a => {
  return b => a + b;
};
const addSeven = createBase(7);
// alert(addSeven(7));
// alert(addSeven(10));

const counter = function(init) {
  let counter = init;
  return {
    increment: function() {
      counter++;
    },
    decrement: function() {
      counter--;
    },
    getCounter: function() {
      return counter;
    }
  };
};

const object = counter(7);
object.increment();
object.increment();
// object.decrement();
object.increment();
result.textContent = object.getCounter();

const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(
    (function(i_local) {
      return function() {
        console.log("The index of this number is: " + i_local);
      };
    })(i),
    3000
  );
}

const arr2 = [10, 12, 15, 21];
for (let i = 0; i < arr2.length; i++) {
  setTimeout(function() {
    console.log("The index of this number is: " + i);
  }, 3000);
}
