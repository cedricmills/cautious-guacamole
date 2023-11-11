/**
 * 
 * 
 *
 */

let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr);


const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
let arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);

let x;
const obj1 = {a: 1, b: 2};
const obj2 = {c: 4, d: 5};
const obj3 = {...obj1, ...obj2}; // Combine using the Spread operator.
x = obj3;
console.log(x);
const obj4 = {obj1, obj2}; // Two object nested.
x = obj4;
console.log(x);

const obj5 = Object.assign({}, obj4); // Using Assign.
console.log(obj5);

const todo = {
  id:1,
  id2:2,
  id3:3,
};

x = Object.keys(todo);
console.log(x);
x = Object.values(todo);
console.log(x);
x = Object.entries(todo);
console.log(x);
console.log(todo.hasOwnProperty('id'));
