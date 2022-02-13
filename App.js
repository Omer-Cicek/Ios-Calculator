//Selecting elements
const innerContainer = document.querySelector('.innerContainer');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');
const operands = document.querySelectorAll('.operand');

let arr = [];
let arr1 = [];
let arr2 = [];
//conrtol function
const controlFunction = () => {
  //plus operand
  if (arr[0] == '+') {
    let ömer = +arr1.join('') + +arr2.join('');
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  } //minus operand
  if (arr[0] == '-') {
    let ömer = +arr1.join('') - +arr2.join('');
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  } //multiply operand
  if (arr[0] == '*') {
    let ömer = +arr1.join('') * (+arr2.join('') == 0 ? 1 : +arr2.join(''));
    console.log(ömer);
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  } //divide operand
  if (arr[0] == '/') {
    let ömer = +arr1.join('') / (+arr2.join('') == 0 ? 1 : +arr2.join(''));
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  }
  //Mod operand
  if (arr[0] == '%') {
    let ömer = +arr1.join('') % +arr2.join('');
    console.log(typeof ömer);
    if (arr[0] == '%') {
      arr = [];
    }
    arr1 = [ömer];
    arr2 = [];
  }
};
//AddEventListener Function
innerContainer.addEventListener('click', (e) => {
  //if clicked button contains operand className
  if (e.target.classList.contains('operand')) {
    arr.push(e.target.value);
  }
  //push nums to arr1 if arr has no operand
  if (arr.length == 0) {
    arr1.push(e.target.value);
  }
  //push nums to arr2 if arr has operand
  if (arr.length == 1 && e.target.classList.contains('num')) {
    arr2.push(e.target.value);
  }

  //if more than one operand
  if (arr.length >= 2) {
    controlFunction();
    arr.shift();
  }
  // when click =
  if (e.target.value == '=') {
    controlFunction();
  }
  // when click AC
  if (e.target.value == 'ac') {
    arr = [];
    arr1 = [];
    arr2 = [];
  }
  //display
  btn1.innerText =
    arr2 == ''
      ? Number(arr1.join('')).toFixed(2)
      : Number(arr1.join('') + ' ' + arr + ' ' + arr2.join('')).toFixed(2);
  btn2.innerText =
    arr2 == ''
      ? Number(arr1.join('')).toFixed(2)
      : Number(arr2.join('')).toFixed(2);
});
