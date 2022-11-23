//===== Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//===== Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];
  function out(one, two) {
    for (let i = 0; i < one.length; i++) {
      if (two.indexOf(one[i]) === -1) newArr.push(one[i])
    }
  }
  out(arr1, arr2);
  out(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);