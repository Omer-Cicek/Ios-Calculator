//Selecting elements
const innerContainer = document.querySelector('.innerContainer');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');
const operands = document.querySelectorAll('.operand');

const num1 = [];
const num2 = [];
const arr = [];
innerContainer.addEventListener('click', (e) => {
  //First Number Part

  if (e.target.classList.contains('num')) {
    num1.push(e.target.value);
  }

  //Selecting operant
  operands.forEach((ope) => {
    if (e.target.value == ope.value && e.target.classList.contains('operand')) {
      num1.pop();
      num1.push(e.target.value);
    }
  });
  console.log(num1.join('').split('+'));
});
