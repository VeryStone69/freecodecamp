//===== Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

//===== Exercise
// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

//===== My solution
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result);
