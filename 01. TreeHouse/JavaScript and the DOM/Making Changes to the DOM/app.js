/*jshint esversion: 6*/

//get all the elements we need to work with
const toggleButton = document.querySelector('button.toggle');
const listSection = document.querySelector('#listSection');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.querySelectorAll('li');
//const = document.querySelector('');

//create upper and lower case from an array
//itemsArray - an array that holds all the elemetns
//pos - position of the array where we menipulate value
//commenting this section out because there is a better way to achive the same result
/*
const upperAndLowerCase = (itemsArray, pos) => {
    itemsArray[pos].addEventListener('mouseover', () => { //onmouseover make uppercase
        itemsArray[pos].textContent = itemsArray[pos].textContent.toUpperCase();
    });

    itemsArray[pos].addEventListener('mouseout', () => { //onmousout make lowercase
        itemsArray[pos].textContent = itemsArray[pos].textContent.toLowerCase();
    });
};
*/

//alternative way to get the same result
listSection.addEventListener('mouseover', (event) => { //onmouseover make uppercase
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});

listSection.addEventListener('mouseout', (event) => { //onmousout make lowercase
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});


//make all the list items upper case on hover
// for (var i = 0; i < listItems.length; i += 1) {
//     upperAndLowerCase(listItems, i);
// }

//write function to change text to the text we want to chagne
descriptionButton.addEventListener("click", () => {
    "use strict";
    descriptionP.innerHTML = descriptionInput.value + ":";
    descriptionInput.value = '';

});

//write function to toggle list menu on and off
toggleButton.addEventListener('click', () => {
    "use strict";
    if (listSection.style.display !== 'none') {
        toggleButton.textContent = 'Show List Section';
        listSection.style.display = 'none';
    } else {
        toggleButton.textContent = 'Hide List Section';
        listSection.style.display = addItemInput.value;
    }
});

//function to update list
addItemButton.addEventListener('click', () => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = ''; //clear input after adding the item
});

//remove the last item from the list on button click
removeItemButton.addEventListener('click', () => {
    let ul = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});

//Lesson Notes:

//we can get and set element attributes, the following is an example of setting attribute. This is best done directly in HTML but this is a good example of how attributes can be set using venilla JS
//p.title = "List Description";

//For getting and setting class attribute '.class' does not work. This is an exception. For the class we need to use ".className"
//..e class we need to use ".className
