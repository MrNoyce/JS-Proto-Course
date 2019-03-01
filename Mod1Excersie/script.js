///////////////////////////////////////////////////////////
//Get User Name
///////////////////////////////////////////////////////////
var userName = window.prompt("Please enter your name.");
var greetingPara = document.getElementById("greeting")
greetingPara.innerHTML += ", " + userName;
////////////////////////////////////////////////////////////
//Get number vals
////////////////////////////////////////////////////////////
var num1 = parseInt(window.prompt("Please enter a number."));
var num2 = parseInt(window.prompt("Enter another number."));
var operandUpdate1 = document.getElementById("operand1");
var operandUpdate2 = document.getElementById("operand2");
operandUpdate1.innerHTML += num1;
operandUpdate2.innerHTML += num2;
/////////////////////////////////////////////////////////////
// Maths Time :)
/////////////////////////////////////////////////////////////
var add = num1 + num2;
var sub = num1 - num2;
var multip = num1 * num2;
var divis = num1 / num2;
var modulus = num1 % num2;
//////////////////////////////////////////////////////////////
// Update HTML
//////////////////////////////////////////////////////////////
document.getElementById("add").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + add;
document.getElementById("sub").innerHTML = "The differnce between " + num1 + " and " + num2 + " is " + sub;
document.getElementById("multip").innerHTML = "The producr of " + num1 + " and " + num2 + " is " + multip;
document.getElementById("divis").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + divis;
document.getElementById("modulus").innerHTML = "The result of the mod op on " + num1 + " and " + num2 + " is " + modulus;