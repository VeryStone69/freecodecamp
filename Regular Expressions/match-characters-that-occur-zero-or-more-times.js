//===== Match Characters that Occur Zero or More Times
// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

//===== Exercise
// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


//===== My solution
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);