//===== Find More Than the First Match
// So far, you have only been able to extract or search a pattern once.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the global search flag: g.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]


//===== Exercise
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.


//===== My solution
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);