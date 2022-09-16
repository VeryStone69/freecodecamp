// Add Key-Value Pairs to JavaScript Objects

// ===== Exercise
// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};


let strawberries = 'strawberries';
foods.bananas = 13;
foods.grapes = 35;
foods[strawberries] = 27;


// ===== Test
console.log(foods);