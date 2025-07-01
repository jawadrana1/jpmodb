
// ES6 TASK SOLUTIONS


// ---------- Global Scope ----------
var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// ---------- Function Scope ----------
function testScope() {
    var funcVar = "var in function";
    let funcLet = "let in function";
    const funcConst = "const in function";
}
testScope();
// console.log(funcVar); // ReferenceError
// console.log(funcLet); // ReferenceError
// console.log(funcConst); // ReferenceError

// ---------- Block Scope ----------
if (true) {
    var blockVar = "var in block";
    let blockLet = "let in block";
    const blockConst = "const in block";
}
console.log(blockVar);
// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError

// ---------- Hoisting ----------
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ReferenceError
let hoistedLet = "let";

// console.log(hoistedConst); // ReferenceError
const hoistedConst = "const";

// ---------- Re-declaration ----------
var a = 10;
var a = 20; // OK

let b = 30;
// let b = 40; // SyntaxError

const c = 50;
// const c = 60; // SyntaxError

// ---------- Re-assignment ----------
var x = 1;
x = 2;

let y = 3;
y = 4;

const z = 5;
// z = 6; // TypeError

// ---------- TDZ ----------
{
    // console.log(m); // ReferenceError
    let m = 100;

    // console.log(n); // ReferenceError
    const n = 200;
}

// ---------- When to use var, let, const ----------
function useVar() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("var loop:", i), 100);
    }
}
function useLet() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log("let loop:", i), 100);
    }
}
const PI = 3.14;
useVar();
useLet();

// ---------- String Interpolation ----------
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// ---------- Multi-line String ----------
let address = `123 Main St
Cityville
Country`;
console.log(address);

// ---------- Simple Expressions ----------
let num1 = 5, num2 = 10;
console.log(`Sum is ${num1 + num2}`);

// ---------- Function Calls ----------
function multiply(a, b) {
    return a * b;
}
console.log(`Product is ${multiply(3, 4)}`);

// ---------- Tagged Template ----------
function simpleTag(strings, ...values) {
    console.log(strings, values);
}
simpleTag`This is ${'cool'}!`;

// ---------- Formatting Tag ----------
function upper(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] ? values[i].toUpperCase() : ""), "");
}
console.log(upper`Hello, ${"world"}!`);

// ---------- Conditional Logic ----------
let hour = 10;
console.log(`${hour < 12 ? "Good morning!" : "Good afternoon!"}`);

// ---------- Template Loops ----------
let items = ["Milk", "Eggs", "Bread"];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
console.log(html);

// ---------- Escaping Backticks ----------
let backtick = `This is a \`backtick\``;
console.log(backtick);

// ---------- Nested Template Literals ----------
let table = `<table>${[["Name", "Age"], ["John", 30]].map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</table>`;
console.log(table);

// ---------- Simple Condition ----------
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// ---------- Even or Odd ----------
let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// ---------- Grade Evaluation ----------
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);

// ---------- Login Status ----------
let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// ---------- Discount Eligibility ----------
let isMember = true, purchaseAmount = 150;
let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.1 : 0;
console.log(discount);

// ---------- Determine Max ----------
const maxValue = (a, b) => a > b ? a : b;
console.log(maxValue(5, 10));

// ---------- Greeting Message ----------
function greet(name = "") {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Alice"));
console.log(greet(""));

// ---------- Mapping Values ----------
let nums = [1, 2, 3, 4];
let mapped = nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log(mapped);

// ---------- Filtering Values ----------
let words = ["cat", "tree", "banana", "go"];
let longWords = words.filter(w => w.length > 3);
console.log(longWords);

// ---------- Copying Array ----------
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(originalArray, copiedArray);

// ---------- Merging Arrays ----------
let arr1 = [1, 2], arr2 = [3, 4];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// ---------- Adding to Array ----------
let numbers = [2, 3, 4];
let updatedNumbers = [1, ...numbers, 5];
console.log(updatedNumbers);

// ---------- Copying Object ----------
let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
console.log(copiedObject);

// ---------- Merging Objects ----------
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// ---------- Updating Object ----------
let user = { name: "Ali", age: 25, email: "ali@mail.com" };
let updatedUser = { ...user, email: "ali123@mail.com", address: "123 Street" };
console.log(updatedUser);

// ---------- Passing Array to Function ----------
function sum(a, b, c) {
    return a + b + c;
}
let numsArr = [1, 2, 3];
console.log(sum(...numsArr));

// ---------- Combine Arrays ----------
function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(combineArrays([1], [2, 3], [4]));

// ---------- Rest Parameter Multiply ----------
function multiplyAll(multiplier, ...args) {
    return args.map(x => x * multiplier);
}
console.log(multiplyAll(2, 1, 2, 3));

// ---------- Spread on Nested Array ----------
let nestedArray = [[1], [2]];
let copyNested = [...nestedArray];
copyNested[0][0] = 99;
console.log(nestedArray, copyNested);

// ---------- Rest Sum ----------
function sumRest(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sumRest(1, 2, 3));

// ---------- Average Function ----------
function average(...nums) {
    return sumRest(...nums) / nums.length;
}
console.log(average(4, 5, 6));

// ---------- First and Rest ----------
let [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest);

// ---------- Skip and Rest ----------
let [, , ...remainingColors] = ["red", "green", "blue", "yellow"];
console.log(remainingColors);

// ---------- Object Destructuring ----------
let person = { name: "John", age: 30, email: "john@mail.com", address: "123 St" };
let { name, email, ...restProps } = person;
console.log(name, email, restProps);


