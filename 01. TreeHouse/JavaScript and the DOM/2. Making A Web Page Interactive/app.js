/*jshint esversion: 6 */


//change all list elements to purple
const myList = document.getElementsByTagName('li');

for(let i = 0; i < myList.length; i++){
	myList[i].style.color = 'purple';
}

//show error for non purple items
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for(let i = 0; i < errorNotPurple.length; i++){
	errorNotPurple[i].style.color = 'red';
}