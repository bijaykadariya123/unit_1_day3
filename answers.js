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

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
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
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// const ninja_turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let element of ninja_turtles) {
//   console.log(element.toUpperCase());
// }
// Yell at the Ninja Turtles
////////////////////////////////

////////////////////////////////
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];
//Console log: the index of Titanic
// console.log(favMovies.indexOf("Titanic"));
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//Answer: It arrange the array in ASCII order

// Use the method pop
// favMovies.pop()
// push "Guardians of the Galaxy"
// favMovies.push("Guardians")
// Reverse the array
// favMovies.reverse();

// Use the shift method
// favMovies.shift();

// unshift - what does it return?
//favMovies.unshift();: It doesnot add anything on the array
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained"));
// favMovies.splice(3, 1, "Avatar");
// console.log(favMovies);
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// const middle_array_length = Math.floor(favMovies.length / 2);
// const first_halfArray = favMovies.slice(0, middle_array_length);
// const lastHalf_array = favMovies.slice(middle_array_length);
// console.log(first_halfArray);
// console.log(lastHalf_array);
// console.log(first_halfArray.indexOf("Fast and Furious"));
// No It doesnot permanently altrer our array
//  We will get value of -1 if the element is not in array

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//Elements of array are mutable even though the variable is assign with const how ever const variable reassin is not eligible for array

// Methods, Revisited
////////////////////////////////

////////////////////////////////
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];
// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);
// whereIsWaldo[1].splice(2, 1, "No one");
// console.log(whereIsWaldo);

// let arr = whereIsWaldo[2][1].splice(1);
// console.log("The desired value of waldo is " + arr);
// Where is Waldo
////////////////////////////////

////////////////////////////////

// for (let i = 1; i <= 20; i++) {
//   console.log("Love me, pet me! HSSSSSS!" + i);
// }
/////////////////////////////////////////////////////////////

// I am not sure what the question is actually asking as of my understanding i am doing console.log  "the string  in array randomly if the number generated is even for 20 times else if the number is not even i am console.log Love me, pet me! HSSSSSS!"
////////////////////////////////////////////////////////////
// const kittyTalk = [
//   "...human...why you taking pictures of me?...",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     const index = Math.floor(Math.random() * kittyTalk.length);
//     console.log(kittyTalk[index]);
//   } else {
//     console.log("Love me, pet me! HSSSSSS!");
//   }
// }
//  Excited Kitten

/////////////////////////////////////////////////////////////////

////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// // assending array
// nums.sort((a, b) => a - b);
// // finding the middle value of array
// const middleIndex = Math.floor(nums.length / 2);
// // If the array has an odd number of elements, the median is the middle element
// if (nums.length % 2 !== 0) {
//   console.log(nums[middleIndex]);
// }
// // If the array has an even number of elements, the median is the average of the two middle elements
// else {
//   const median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
//   console.log(median);
// }

//  Find the Median answered
////////////////////////////////
