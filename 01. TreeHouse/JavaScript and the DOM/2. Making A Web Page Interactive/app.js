/*jshint esversion: 6 */


//change all list elements to purple
const myList = document.getElementsByTagName('li');

for(let i = 0; i < myList.length; i++){
	myList[i].style.color = 'purple';
}

//show error for non purple items
//const errorNotPurple = document.getElementsByClassName('error-not-purple');

//alternative way to select
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for(let i = 0; i < errorNotPurple.length; i++){
	errorNotPurple[i].style.color = 'red';
}

//using nth child
const evens = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i < evens.length; i++){
	evens[i].style.backgroundColor = 'rgb(220, 210, 230)';
}

//using nth child 2
const odds = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i < odds.length; i++){
	odds[i].style.backgroundColor = '#eeeeee';
}