//===== Match Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.


//===== Exercise
// Match all the letters in the string quoteSample.
// Note: Be sure to match both uppercase and lowercase letters.


//===== My solution
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);