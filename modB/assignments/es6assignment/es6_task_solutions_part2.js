
// ---------- Nested Destructuring ----------
let student = {
    id: 101,
    name: "Ali",
    grades: [90, 85],
    info: { age: 20, major: "CS" }
};
let { id, name: studentName, info: { major }, ...restStudent } = student;
console.log(id, studentName, major, restStudent);

// ---------- Filter Even ----------
function filterEven(...nums) {
    return nums.filter(n => n % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4));

// ---------- Combine and Sort ----------
function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
}
console.log(combineAndSort([3, 2], [1, 4]));

// ---------- Destructuring Arrays ----------
let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

// ---------- Skipping Elements ----------
let colors = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = colors;
console.log(primaryColor, tertiaryColor);

// ---------- Rest in Destructuring ----------
let [firstNumber, ...remainingNumbers] = [1, 2, 3, 4, 5];
console.log(firstNumber, remainingNumbers);

// ---------- Object Basic Destructuring ----------
let person2 = { name: "Sara", age: 22, city: "Lahore" };
let { name: personName, age: personAge, city } = person2;
console.log(personName, personAge, city);

// ---------- Renaming Variables ----------
let car = { make: "Toyota", model: "Corolla", year: 2020 };
let { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear);

// ---------- Default Values ----------
let settings = { theme: "dark" };
let { theme, language = "English" } = settings;
console.log(theme, language);

// ---------- Nested Arrays ----------
let nested = [[1, 2], [3, 4], [5, 6]];
let [[a], [b], [c]] = nested;
console.log(a, b, c);

// ---------- Object within Object ----------
let profile = { username: "jawad", details: { email: "j@mail.com", address: "Karachi" } };
let { username, details: { email, address } } = profile;
console.log(username, email, address);

// ---------- Mix Arrays & Objects ----------
let data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
let { id: userId, info: [{ name: userName }, { age: userAge }] } = data;
console.log(userId, userName, userAge);

// ---------- Array Parameter Function ----------
function printCoordinates([x, y]) {
    console.log(x, y);
}
printCoordinates([5, 10]);

// ---------- Object Parameter Function ----------
function displayUser({ name, age }) {
    console.log(name, age);
}
displayUser({ name: "Zara", age: 27 });

// ---------- Object.keys() ----------
let book = { title: "JS Guide", author: "John", year: 2021 };
console.log(Object.keys(book));

// ---------- Count Properties ----------
let student2 = { name: "Ali", age: 20, grade: "A", school: "High" };
console.log(Object.keys(student2).length);

// ---------- Iterate Over Keys ----------
let product = { name: "Laptop", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(key, product[key]));

// ---------- Object.values() ----------
let movie = { title: "Avengers", director: "Russo", year: 2019, genre: "Action" };
console.log(Object.values(movie));

// ---------- Sum Values ----------
let scores = { math: 90, science: 85, english: 88 };
let total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total);

// ---------- Iterate Over Values ----------
let user2 = { username: "max", email: "m@mail.com", location: "Karachi" };
Object.values(user2).forEach(value => console.log(value));

// ---------- Object.entries() ----------
console.log(Object.entries(car));

// ---------- Convert Object to Array ----------
let person3 = { firstName: "Ali", lastName: "Khan", age: 28 };
console.log(Object.entries(person3));

// ---------- Iterate Over Entries ----------
let settings2 = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings2).forEach(([key, value]) => console.log(key, value));

// ---------- Filter Keys ----------
let inventory = { apples: 5, bananas: 12, oranges: 20, grapes: 8 };
let keysOver10 = Object.keys(inventory).filter(k => inventory[k] > 10);
console.log(keysOver10);

// ---------- Transform Values ----------
let temperatures = { morning: 20, afternoon: 30, evening: 25 };
let fahrenheit = Object.fromEntries(Object.entries(temperatures).map(([k, v]) => [k, v * 1.8 + 32]));
console.log(fahrenheit);

// ---------- Key-Value Swap ----------
let roles = { admin: "001", editor: "002", viewer: "003" };
let swapped = Object.fromEntries(Object.entries(roles).map(([k, v]) => [v, k]));
console.log(swapped);

// ---------- Filter and Map ----------
let nums2 = [1,2,3,4,5,6,7,8,9,10];
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log(filterAndMap(nums2, n => n % 2 !== 0, n => n * n));

// ---------- Sort and Reduce ----------
let words2 = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log(sortAndReduce(words2, (a,b)=>a.localeCompare(b), (acc, curr) => acc + " " + curr));

// ---------- Callback ----------
function greetCallback(name, callback) {
    callback(`Hello, ${name}`);
}
function printGreeting(msg) {
    console.log(msg);
}
greetCallback("Ali", printGreeting);

// ---------- Async Callback ----------
function fetchData(callback) {
    setTimeout(() => callback("Data received!"), 1000);
}
fetchData(console.log);

// ---------- Simple Arrow Function ----------
const add = (a, b) => a + b;
console.log(add(3, 5));

// ---------- Arrow Function with map ----------
let numbers2 = [1, 2, 3, 4, 5];
let squared = numbers2.map(n => n * n);
console.log(squared);

// ---------- Variable Scope ----------
function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

// ---------- Closure ----------
function createCounter() {
    let count = 0;
    return () => console.log(++count);
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1(); counter1();
counter2();

// ---------- Default Parameters ----------
function greetDefault(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}`);
}
greetDefault("Ali");
greetDefault("Zara", "Hi");

// ---------- Default Area Function ----------
function calculateArea(width = 10, height = 5) {
    return width * height;
}
console.log(calculateArea());
console.log(calculateArea(3, 4));

// ---------- Reduce Examples ----------
let words3 = ["Hello", "world", "this", "is", "JavaScript"];
let concatenated = words3.reduce((acc, word) => acc + " " + word);
console.log(concatenated);

// ---------- Some/Every/Find/FindIndex ----------
let mixedNums = [1, 3, 5, 7, 8];
console.log(mixedNums.some(n => n % 2 === 0));
console.log(mixedNums.every(n => n % 2 === 0));
console.log(mixedNums.find(n => n % 2 === 0));
console.log(mixedNums.findIndex(n => n % 2 === 0));

// ---------- Promises ----------
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Hello, world!"));

// ---------- Promise Chain ----------
function fetchDataPromise() {
    return Promise.resolve({ name: "Ali", age: 30 });
}
fetchDataPromise().then(data => console.log(data));

// ---------- Promise with Error ----------
function fetchUserData() {
    return new Promise((resolve, reject) => {
        let user = { name: "Ali" }; // missing age
        user.age ? resolve(user) : reject("Age missing!");
    });
}
fetchUserData().catch(console.log);

// ---------- Simulate Network ----------
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Sunny") : reject("Network error");
        }, 1000);
    });
}
getWeather().then(console.log).catch(console.error);

// ---------- async/await ----------
async function sayHello() {
    await delay(2000);
    console.log("Hello, world!");
}
sayHello();

// ---------- getUserData with async/await ----------
async function getUserData() {
    try {
        let data = await fetchUserData();
        console.log(data);
    } catch (e) {
        console.log("Error:", e);
    }
}
getUserData();

// ---------- Fetch and Process ----------
function fetchUser() {
    return Promise.resolve({ id: 1, name: "Ali" });
}
function fetchPosts(userId) {
    return Promise.resolve(["Post 1", "Post 2"]);
}
async function getUserAndPosts() {
    let user = await fetchUser();
    let posts = await fetchPosts(user.id);
    console.log(user, posts);
}
getUserAndPosts();

// ---------- Error Handling in async ----------
function fetchUserError() {
    return Promise.reject("User not found");
}
async function getUserInfo() {
    try {
        let user = await fetchUserError();
        console.log(user);
    } catch (e) {
        console.log("Caught Error:", e);
    }
}
getUserInfo();

// ---------- Simulate API Call ----------
function apiCall() {
    return new Promise(resolve => {
        let delay = Math.random() * 1000;
        setTimeout(() => resolve(`Response after ${delay.toFixed(0)}ms`), delay);
    });
}
async function getData() {
    try {
        console.log(await apiCall());
        console.log(await apiCall());
        console.log(await apiCall());
    } catch (e) {
        console.log("Error:", e);
    }
}
getData();
