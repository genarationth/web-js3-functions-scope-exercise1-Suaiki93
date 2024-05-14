// Exercise 1.1

function add(a, b) {
  return a + b;
}
const result1 = add(65, 55);
console.log(result1);

function remove(a, b) {
  return a - b;
}
const result2 = remove(65, 55);
console.log(result2);

function multiply(a, b) {
  return a * b;
}

const result3 = multiply(65, 55);
console.log(result3);

function divide(a, b) {
  return a / b;
}

const result4 = divide(65, 55);
console.log(result4);

// Exercise 1.2
const info = function (firstName, location, hobby) {
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      " and enjoy " +
      hobby
  );
};

info("Betty", "Bali", "Yoga");
