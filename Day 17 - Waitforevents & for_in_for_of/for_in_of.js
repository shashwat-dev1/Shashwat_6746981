//for...in and for...of loops in JavaScript

const user = {
  name: "Shashwat",
  age: 20,
  city: "Jaipur"
};

//for...in with objects
for (const key in user) {
  console.log(key);        
  console.log(user[key]);  
}

//for...in with arrays
const arr = [10, 20, 30];
for (const index in arr) {
  console.log(index);
}

//for of with object.keys() for using for...of with objects as objects are not iterable
for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}