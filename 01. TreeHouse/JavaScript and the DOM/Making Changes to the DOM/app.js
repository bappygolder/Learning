/*jshint esversion: 6*/

//get all the elements we need to work with
const p = document.querySelector('p.description');
const input = document.querySelector('input');
const button = document.querySelector('button');
//const = document.querySelector('');

//write function to change text to the text we want to chagne
button.addEventListener("click", () => {
	"use strict";
    p.innerHTML = input.value + ":";
});

//Lesson Notes:

//we can get and set element attributes, the following is an example of setting attribute. This is best done directly in HTML but this is a good example of how attributes can be set using venilla JS
//p.title = "List Description";

//For getting and setting class attribute '.class' does not work. This is an exception. For the class we need to use ".className"

