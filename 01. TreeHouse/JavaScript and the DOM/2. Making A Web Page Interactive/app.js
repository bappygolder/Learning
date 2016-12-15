const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
const reset = document.getElementById('reset');

//change heading color
myButton.addEventListener('click', () => {
  myHeading.style.color = myInput.value;
});