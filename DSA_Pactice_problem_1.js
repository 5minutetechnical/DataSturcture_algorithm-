//Creating and initializing arrays
let daysOfWeek = new Array(); // {1} 

daysOfWeek = new Array(7); // {2} 

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}

// console.log(daysOfWeek)

let dasys=[]
let daysOfWeek1 = ['Sunday1', 'Monday2', 'Tuesday3', 'Wednesday4', 'Thursday5', 'Friday6', 'Saturday7']; 

// console.log(daysOfWeek1.length)

//Accessing elements and iterating an array

// for (let i = 0; i < daysOfWeek1.length; i++) { 
//     console.log(daysOfWeek1[i]); 
// } 

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// numbers[numbers.length] = 10; 


// numbers.push(12, 13); 
// console.log(numbers)

Array.prototype.insertFirstPosition = function(value) { 
    for (let i = this.length; i >= 0; i--) { 
      this[i] = this[i - 1]; 
    } 
    this[0] = value; 
  }; 
  numbers.insertFirstPosition(15);
// console.log(numbers)
  numbers.unshift(-22); 

console.log(numbers)