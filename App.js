//Selecting elements
const innerContainer = document.querySelector('.innerContainer');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');
const operands = document.querySelectorAll('.operand');

let arr = [];
let arr1 = [];
let arr2 = [];
//kontrol fonksiyonu
const controlFunction = () => {
  if (arr[0] == '+') {
    let ömer = +arr1.join('') + +arr2.join('');
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  }
  if (arr[0] == '-') {
    let ömer = +arr1.join('') - +arr2.join('');
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  }
  if (arr[0] == '*') {
    let ömer = +arr1.join('') * (+arr2.join('') == 0 ? 1 : +arr2.join(''));
    console.log(ömer);
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  }
  if (arr[0] == '/') {
    let ömer = +arr1.join('') / (+arr2.join('') == 0 ? 1 : +arr2.join(''));
    arr1 = [ömer];
    arr2 = [];
    console.log(arr1);
    console.log(arr2);
  }
  if (arr[0] == '%') {
    let ömer = +arr1.join('') % +arr2.join('');
    console.log(typeof ömer);
    if (arr[0] == '%') {
      arr = [];
    }
    arr1 = [ömer];
    arr2 = [];
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
  }
};
//AddEventListener Function
innerContainer.addEventListener('click', (e) => {
  //tıklanan nesnenin classında operand varsa
  if (e.target.classList.contains('operand')) {
    arr.push(e.target.value);
  }
  //arr dosyasında operand olmadığında arr1 e pushla
  if (arr.length == 0) {
    arr1.push(e.target.value);
  }
  //arr dosyasında operand olduğunda arr2 e pushla
  if (arr.length == 1 && e.target.classList.contains('num')) {
    arr2.push(e.target.value);
  }

  //eğer ki arr de 1 den fazla operand varsa
  if (arr.length >= 2) {
    controlFunction();
    arr.shift();
    console.log(arr);
  }
  //eşittire basınca
  if (e.target.value == '=') {
    controlFunction();
  }
  // ac basınca
  if (e.target.value == 'ac') {
    arr = [];
    arr1 = [];
    arr2 = [];
  }
  console.log(arr);
  console.log(arr1);
  console.log(arr2);
  btn1.innerText =
    arr2 == ''
      ? arr1.join('')
      : arr1.join('') + ' ' + arr + ' ' + arr2.join('');
  btn2.innerText = arr2 == '' ? arr1.join('') : arr2.join('');
});
