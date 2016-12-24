/*jshint esversion: 6*/

//get all the elements we need to work with
const toggleButton = document.querySelector('button.toggle');
const sectionToHide = document.querySelector('#toggleSection');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//const = document.querySelector('');

//write function to change text to the text we want to chagne
descriptionButton.addEventListener("click", () => {
    "use strict";
    descriptionP.innerHTML = descriptionInput.value + ":";
});

//write function to toggle list menu on and off
toggleButton.addEventListener('click', () => {
    "use strict";
    if (sectionToHide.style.display !== 'none') {
        toggleButton.textContent = 'Show List Section';
        sectionToHide.style.display = 'none';
    } else {
        toggleButton.textContent = 'Hide List Section';
        sectionToHide.style.display = addItemInput.value;
    }

});

//function to update list
addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'hi';
});

//Lesson Notes:

//we can get and set element attributes, the following is an example of setting attribute. This is best done directly in HTML but this is a good example of how attributes can be set using venilla JS
//p.title = "List Description";

//For getting and setting class attribute '.class' does not work. This is an exception. For the class we need to use ".className"
//..e class we need to use ".className"
