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
