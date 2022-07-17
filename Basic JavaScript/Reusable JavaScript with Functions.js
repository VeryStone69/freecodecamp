//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log('Hi World')
  }
reusableFunction(); // in console: Hi World

//Passing Values to Functions with Arguments
function functionWithArgs(a,b) {
    console.log(a+b);
  }
functionWithArgs(5,5);

//Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
  }
const answer = timesFive(5);

//Global Scope and Functions
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
 }

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
