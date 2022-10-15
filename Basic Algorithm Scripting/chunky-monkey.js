//===== Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arr2 = arr.slice();


  let subarray = [];
  for (let i = 0; i < Math.ceil(arr2.length / size); i++) {
    subarray[i] = arr2.slice((i * size), (i * size) + size);
  }
  return subarray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //[["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);//[[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]