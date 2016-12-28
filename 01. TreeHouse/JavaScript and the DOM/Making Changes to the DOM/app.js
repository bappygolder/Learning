/*jshint esversion: 6*/

//get all the elements we need to work with
const toggleButton = document.querySelector('button.toggle');
const listSection = document.querySelector('#listSection');
const listUl = listSection.querySelector('ul');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.querySelectorAll('li');
const mainH1 = document.querySelector('#myHeading');
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
/*
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
*/

//practice event listener:
/*
mainH1.addEventListener('click', (event) => {
    mainH1.style.color = 'red';
});
mainH1.addEventListener('mouseout', (event) => {
    mainH1.style.color = '#484848';
});
*/

//practic by creating a seperate event handeler that changes the list items color on click
//..we could've just simply added this to the evnt handeler above but do this seperately for practice
/* psudocode
- get the list items on which the event will be performed
- make sure we only target that event only (use if statement)
- perform the desired action [change color]
*/
/*
listSection.addEventListener('mouseover', (event) => {
    if (event.target.tagName == "LI") {
        event.target.style.color = 'tomato';
    }
});

listSection.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') { //only apply this behaviour to the list elements and not others
        event.target.style.color = 'purple';
    }
});
*/

//hide each button on click make use of parentNode
listUl.addEventListener('click', (event) => { //onmouseover make uppercase
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});


//make all the list items upper case on hover
// for (var i = 0; i < listItems.length; i += 1) {
//     upperAndLowerCase(listItems, i);
// }

//write function to change text to the text we want to chagne
descriptionButton.addEventListener("click", () => {
    "use strict";

    //alert user if the input box is empty
    if (descriptionInput.value === "") {
        showNotification();
    }
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
    //alert user if the input box is empty
    if (addItemInput.value === "") {
        showNotification();
        return; //exit function
    }

    //run the code below if there is a value in the input box
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

//write a validation function for users when they click
//..try to add sometime from an empty input box
showNotification = () => alert("There is nothing in your input box. Try writing something first and then try agian");


//Lesson Notes:

//we can get and set element attributes, the following is an example of setting attribute. This is best done directly in HTML but this is a good example of how attributes can be set using venilla JS
//p.title = "List Description";

//For getting and setting class attribute '.class' does not work. This is an exception. For the class we need to use ".className"
//..e class we need to use "
