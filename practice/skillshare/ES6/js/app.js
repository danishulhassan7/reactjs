// Variables
// var 

document.write("<h1>ES6</h1>");
document.write("<h1>var</h1>");
var age = 21;

function varVariable() {
    var name = "Danish Malik";
    document.write(name + "<br>");
    document.write(age + "<br>");
}

varVariable();
document.write("My name is " + name + "and my age is " + age + "<br>");
// name will not be accessible because it is in local scope

//let
document.write("<h1>let</h1>");

let x = 10;
document.write("x = " + x + "<br>");

function varLet() {
    x = 20
    document.write("x = " + x + "<br>");
}

varLet();

if (x = 10) {
    x += 30;
    let y = 100;
    document.write("x: " + x + "<br>");
} else {
    document.write("False" + "<br>");
}

//document.write("y: " + y + "<br>");
//Error "y is not defined" (We can not access the variable let outside the code block)


// We can update the let variable value
// let is not accessible outside the code block. e.g => if statement
// we can access the var outside the code block. e.g => if statement

//const

document.write("<h1>const</h1>");

const num1 = 10;
document.write("num1 = " + num1 + "<br>");

function varConst() {
    const num2 = 20;
    // num2 = 30; we cant change the value of const variable 
    document.write("num1 = " + num1 + "<br>");
    document.write("num2 = " + num2 + "<br>");
}

varConst();

const num3 = 30;
document.write("num3 = " + num3 + "<br>");


if (num3 == 30) {
    document.write("num3: " + num3 + "<br>");
    const z = 5;
} else {
    document.write("False" + "<br>");
}
// document.write("z : " + z + "<br>");  

// As same let, we also can not acess the const outside code block
// And we can't change the value of const value

//Functions
document.write("<h1>Simple Function</h1>");

const integers = [1, 2, 3, 4, 5];

const updateIntegers = integers.map(function(num) {
    return num *= 5;
});
document.write(updateIntegers);


document.write("<h1>Arrow Function</h1>");
const numbers = [1, 2, 3, 4, 5];

const updateNumbers = numbers.map((value) => value *= 10);
document.write(updateNumbers);

document.write("<h1>Arrow function with filter method</h1>");

const ages = [25, 5, 19, 54, 21, 18, 24, 17, 9];

const adults = ages.filter((check) => check > 18);
document.write(adults);


//Template Strings
document.write("<h1>Template Strings</h1>");

const fullname = "Danish Ul Hassan";
const myAge = 21;
const details = ` <strong> My name is ${fullname}, and I'm ${myAge} years old. </strong>`;
document.write(details);

//Prototype Methods
document.write("<h1>Prototype Methods</h1>");
document.write("All results in console.log");

// simple object 
const Person = {
    name: "Dani",
    age: 20,
    gender: "Male"
}

console.log(Person);

// creating function constructor

function Details(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const dani = new Details("Malik", 21, "Male");
console.log(dani);

// Using Prototype method 

Details.prototype.speak = function() {
    console.log(`My name is ${this.name}, and I'm ${this.age} years old.`);
}

dani.speak();

// Classes 
document.write("<h1>Classes</h1>");

class Data {
    constructor(myName, myAge) {
        this.myName = myName;
        this.myAge = myAge
    }
    speak() {
        document.write(`My name is ${this.myName}, and I'm ${this.myAge} years old!`);
    }
}

const steve = new Data("Steven Smith", 29);
steve.speak();

// Spread Operators
document.write("<h1>Spread Operators</h1>");

const batsmens = ['Fakher', 'Imam', 'Baber', 'Haris', 'Iftthikar', 'Haider'];
const bowlers = ['Shadab', 'Wahab', 'Shaheen', 'Amir'];

// Without Spread operators 
let team = [];
team = team.concat(batsmens);
team.push("Sarfaraz");
team = team.concat(bowlers);
console.log(team);


// Spread operator 
team = [...batsmens, "Sarfaraz", ...bowlers];
document.write(team);

// Object Destructuring
document.write("<h1>Object Destructuring</h1>");

let obj = {
    myname: "Malik Danish Ul Hassan",
    mycity: "Karachi",
    email: "danishulhasasn7@xpf.com"
}

let { myname, mycity, email } = obj;

document.write(myname + "<br>");
document.write(mycity + "<br>");
document.write(email + "<br>");


//Arrays Destructuring
let nums = [22, 34, 56, 34, 76, 27, 91, 30];
let [n1, n2, n3, ...remainingNums] = nums;

document.write(n1 + "<br>");
document.write(n2 + "<br>");
document.write(n3 + "<br>");
document.write(remainingNums + "<br>");
document.write("<br>");

//Another Example

let obj1 = {
    username: "Malik Danish Ul Hassan",
    usercity: "Karachi"
};

function message({ username, usercity }) {
    document.write(`Hello, ${username}. How's the weather in ${usercity}?`);
}

message(obj1);



// Promises
document.write("<h1>Promises</h1>");


function divide(num1, num2) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number') {
            reject("First argument is not a number");
        }
        if (typeof num2 !== 'number') {
            reject("Second argument is not a number");
        }
        if (num2 == 0) {
            reject("Number can not be divided by zero");
        }
        resolve(num1 / num2);
    });
}



document.write("Start of Script" + "<br>");
let a = 20,
    b = 5;
divide(a, b)
    .then(result => document.write("The result of Division is: ", result + "<br>"))
    .catch(err => document.write("There was an error: ", err + "<br>"));
document.write("End of Script" + "<br>");