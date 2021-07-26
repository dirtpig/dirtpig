// fundamentals part 3 practice problems

// 1. Write a function called add7 that takes one number and returns that number + 7.
function add7(num) {
  if (num * 0 === 0) {
    return num + 7;
  } else return "daheck? that is not a number...";
}

// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
  return a * b;
}

// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(yourString) {
  let firstLetter = yourString.slice(0, 1);
  let uppeD = firstLetter.toUpperCase();
  let theRest = yourString.slice(1);
  let dowN = theRest.toLowerCase();

  return uppeD + dowN;
}

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string
// note: lastLetter("abcd") should return "d"

function lastLetter(yourString) {
  return yourString.substr(-1);
}
