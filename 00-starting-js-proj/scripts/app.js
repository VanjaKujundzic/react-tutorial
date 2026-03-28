// import * as util from "./util.js";

// console.log(`Key: ${util.key}, Name: ${util.name}, Age: ${util.age}`);

function combine(a, b, c) {
  return (a * b) / c;
}
const result = combine(10, 20, 5);

console.log(result);

class Person {
  name = "Vanja";
  age = 30;

  greet() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}
const me = new Person();
me.greet();

const hobbies = ["Reading", "Traveling", "Cooking"];
const numbArray = [1, 2, 3];
console.log(hobbies[0]);

console.log(
  hobbies.findIndex((item) => {
    return item === "Cooking";
  }),
);

function transformObject(array) {
  return array.map((num) => ({ val: num }));
}

const editedArray = transformObject(numbArray);
console.log(editedArray);

const nameArray = ["Vanja", "Kujundzic"];
const [firstName, lastName] = nameArray;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

const hobies2 = ["Test", "Test2", "Test3"];
const mergedHobbies = [...hobbies, ...hobies2];
console.log(mergedHobbies);

const password = prompt("Enter your password:");

if (password === "12345") {
  console.log("Access granted");
}
hobbies.forEach((hobby) => {
  console.log(hobby);
});

function SayHi() {
  consolle.log("Hi");
}
setTimeout(() => {
  SayHi();
}, 2000);

function handleTime() {
  console.log("Time's up!");
}
setTimeout(handleTime, 3000);
