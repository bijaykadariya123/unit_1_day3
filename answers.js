/*
////////////////////////////////

==================Question no 1===============================
//Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <= 20; i++) {
  console.log("The number is " + i);
}
// Easy Going

////////////////////////////////
*/

////////////////////////////////
//==================Question no 2===============================
// Write a for loop that will log only the even numbers in 0 through 200.
/*
for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Get Even
////////////////////////////////
*/

////////////////////////////////
//==================Question no 2===============================
//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
/*
for (i = 1; i <= 100; i++) {
  console.log(i);
}

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Fizz Buzz
*/
////////////////////////////////

////////////////////////////////
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee.splice(2, 1, 5001);
// console.log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy.splice(3, 1, "Gotham City");
// console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins");
// console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);
// Wild Wild Life

////////////////////////////////

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
