//===== Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let arrTemp = str.split(" ");
  let out = 1;
  for (let i = 0; i < arrTemp.length; i++) {
    if (arrTemp[i].length > out) out = arrTemp[i].length;
  }
  return out;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");