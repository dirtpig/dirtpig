// SOLVING FIZZBUZZ
//
// The Problem -
//  Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.
//
// Re-Word It -
//  Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by three without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both three and five without a remainder print FizzBuzz.
//
// The Algorithm in Pseudo Code --------------------
//
//  1. When a user inputs a number
// let answer = parseInt(prompt(`Please enter the number you would like to FizzBuzz to: `));

// 2. Loop from 1 to the entered number
// for (let i = 1; i <= answer; i++) {  // most loops will start from 0
//     console.log(i);
//   }

// 3. If the current number is divisible by 3 then print "Fizz"
// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0) { 
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }

// 4. If the current number is divisible by 5 then print "Buzz"
// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
//  Otherwise print the current number
let answer = parseInt(prompt(`Please enter the number you would like to FizzBuzz to: `));
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`);
    }
    else if (i % 3 === 0) {
      console.log(`Fizz`);
    } 
    else if (i % 5 === 0) {
      console.log(`Buzz`);
    } 
    else {
      console.log(i);
    }
  }






// my premade outline before starting lesson -
//
// function fizzBuzz(number) {
//     let num = 0++; 
//     if (num % 3 === 0) {
//         return `Fizz`;
//     }
//     else if (num % 5 === 0) {
//         return `Buzz`;
//     }
//     if (num % 3,5 === 0) {
//         return `FizzBuzz`;
//     }
//     else return num;
    
// }

// notes


