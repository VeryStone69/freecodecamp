//===== Modify an Object Nested Within an Object

// ===== Exercise
// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

// ===== Test
console.log(userActivity);