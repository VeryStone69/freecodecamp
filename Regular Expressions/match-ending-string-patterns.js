//===== Match Ending String Patterns
// In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign character $ at the end of the regex.


//===== Exercise
// Use the anchor character ($) to match the string caboose at the end of the string caboose.

//===== My solution
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);