// // Pass by Value
// let a = 45;
// let b = a;
// b = 20;
// console.log(a);
// console.log(b);

// // Pass by Reference
// let obj = {
//   name: "Sam",
//   age: "23",
//   city: "NY",
// };
// let obj2 = obj;
// obj2.name = "Joe";
// console.log(obj.name);
// console.log(obj2.name);

// Destructuring
let obj = {
  name: "Sam",
  age: "23",
  city: "NY",
};

console.log(obj.name, obj.age);
let { name, age, city } = obj;
console.log(name, age, city);
