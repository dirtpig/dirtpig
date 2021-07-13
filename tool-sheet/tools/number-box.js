const input = document.querySelector(".form-control.form-control-lg");
const para = document.querySelector("p#tools");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.onchange = function () {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent =
      num +
      " squared is " +
      squared(num) +
      " | \n" +
      num +
      " cubed is " +
      cubed(num) +
      " | \n" +
      //
      "the factorial of " +
      num +
      " is " +
      factorial(num);

    //num +
    //" factorial is " +
    //factorial(num) +
    //"\n";
  }
};
