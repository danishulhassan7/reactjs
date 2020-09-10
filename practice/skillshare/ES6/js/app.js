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