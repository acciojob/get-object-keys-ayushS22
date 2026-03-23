// Create object with function inside it
const myObj = {
  getKeys: function(obj) {
    return Object.keys(obj);
  }
};

// Example usage
const student = {
  name: "John",
  age: 20,
  city: "Delhi"
};

console.log(myObj.getKeys(student)); 
// ["name", "age", "city"]