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
const listItems = listUl.children;
//can also use the following to get list itemsArray
//const listItems = listUl.querySelectorAll('li');
const mainH1 = document.querySelector('#myHeading');
//const = document.querySelector('');

//practicing with first and last element childs
const firstLi = listUl.firstElementChild;
const LastLi = listUl.lastElementChild;

//change the color for the first and the last titem
// firstLi.style.backgroundColor = 'lightskyblue';
// LastLi.style.backgroundColor = 'lightsteelblue';


//create buttons for our list item/s
addButtonsToListItem = (li) => {
    //create and add up buttons
    let up = document.createElement('button');
    up.className = 'upBtn';
    up.textContent = 'Up';
    li.appendChild(up);

    //create and add up buttons
    let down = document.createElement('button');
    down.className = 'downBtn';
    down.textContent = 'Down';
    li.appendChild(down);

    //create and add up buttons
    let remove = document.createElement('button');
    remove.className = 'removeBtn';
    remove.textContent = 'Remove';
    li.appendChild(remove);
};

//add buttons to existing list items
for (var i = 0; i < listItems.length; i++) {
    addButtonsToListItem(listItems[i]);
}

let latestListUl = listSection.querySelector('ul');
let firstUpBtn = latestListUl.firstElementChild.querySelector('.upBtn');
let SecondUpBtn = latestListUl.firstElementChild.nextElementSibling.querySelector('.upBtn');
let secondLstItm = latestListUl.firstElementChild.nextElementSibling;



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

//remove list items on remove button click
//and move item up on click on up
//move item down on click of down button
listUl.addEventListener('click', (event) => { //onmouseover make uppercase
    //remove button functionality
    if (event.target.className === 'removeBtn') { //..and it is the remove button
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }

    //up button functionality
    if (event.target.className == 'upBtn') {
        let clickedLi = event.target.parentNode;
        let prevLi = clickedLi.previousElementSibling;
        let ul = clickedLi.parentNode;
        let secondListItem = ul.firstElementChild.nextElementSibling.querySelector('.upBtn');

        //if (prevLi) { //if it is not the first item
        if (clickedLi == secondListItem) { //if it is the second list item
            SecondUpBtn.style.visibility = 'hidden'; //hide second 'up' button back again [at this point this is invisible]
            firstUpBtn.style.visibility = 'visible'; //add the second 'up' button in preparation to position it first
            ul.insertBefore(clickedLi, prevLi); //insert the previous list before the clicked list item
            //we swaped the list items so swap the position of the variables as well
            //ul = clickedLi.parentNode;
            //clickedLi = event.target.parentNode; //update the item that was clicked
            //clickedLi = event.target.parentNode;
            //ul = clickedLi.parentNode;
            //SecondUpBtn = ul.firstElementChild.nextElementSibling.querySelector('.upBtn');
            //prevLi = SecondUpBtn.previousElementSibling;

            //update the second button
            // let tempLi = prevLi;
            // prevLi = clickedLi;
            // clickedLi = tempLi;
        } else { //for all the other list items
            SecondUpBtn.style.visibility = 'hidden'; //hide second 'up' button back again [at this point this is invisible]
            firstUpBtn.style.visibility = 'visible'; //add the second 'up' button in preparation to position it first
            ul.insertBefore(clickedLi, prevLi); //just move their next sibling one level up
        }
        //} //else {
        //showNotification('Can\'t move the top item.');
        //}
        //update the position of all the list items

        //firstUpBtn = ul.firstElementChild.querySelector('.upBtn');
        //prevLi = clickedLi.previousElementSibling;
        //prevLi = clickedLi.previousElementSibling;
        //SecondUpBtn = ul.firstElementChild.nextElementSibling.querySelector('.upBtn');
        //prevLi = clickedLi.previousElementSibling;
    }
    /*
        //down button functionality
        if (event.target.className === 'downBtn') {
            let clickedLi = event.target.parentNode;
            let ul = clickedLi.parentNode;
            //if it is the last item
            if (clickedLi === listUl.lastChild) {
                showNotification('Can\'t move the last item.');
                return;
            } else if (clickedLi === //it is a second to last item
                listUl.lastElementChild.previousElementSibling) {
                //add a list item to the end of the list
                let tempLi = document.createElement('LI');
                ul.appendChild(tempLi);

                //insert clicked item before the temp list item
                ul.insertBefore(clickedLi, tempLi);

                //remove the addde item
                ul.removeChild(tempLi);
            } else { //if it is not the last or second to last item
                //get the second sibling down
                let nextOfNextLi = clickedLi.nextElementSibling.nextElementSibling;

                //insert our element before the second sibling down
                listUl.insertBefore(clickedLi, nextOfNextLi);
            }
        }
        */

    //another way to solve the down arrow issue
    //..instead of thinking about moving the clicked element
    //..we can think about moving the element after the clicked element before the clicked element
    if (event.target.className === 'downBtn') { //if down button is clicked

        let clickedLi = event.target.parentNode;
        let nextLi = clickedLi.nextElementSibling;
        let ul = clickedLi.parentNode;

        if (nextLi) { //if next list item exists or the nextLi != null
            if (clickedLi === listUl.firstElementChild) { //if it is the first list item then make the 'up' button visible before moving the the item down
                firstUpBtn.style.visibility = 'visible'; //add first 'up' button back again [at this point this is invisible]
                SecondUpBtn.style.visibility = 'hidden'; //hide the second 'up' button in preparation to position it first
                ul.insertBefore(nextLi, clickedLi); //reposition the two list items
            } else {
                ul.insertBefore(nextLi, clickedLi); //insert the next list item before the clicked ilement
            }

            //update the position of all the list items
            ul = clickedLi.parentNode;
            firstUpBtn = ul.firstElementChild.querySelector('.upBtn');
            SecondUpBtn = ul.firstElementChild.nextElementSibling.querySelector('.upBtn');
        } //else {
        //show notification if it is the last item
        //     showNotification('Can\'t move the last item.');
        // }
    }
});


//make all the list items upper case on hover
// for (var i = 0; i < listItems.length; i += 1) {
//     upperAndLowerCase(listItems, i);
// }

//write function to change text to the text we want to chagne
descriptionButton.addEventListener("click", () => {
    "use strict";
    if (descriptionInput.value !== "") {
        descriptionP.innerHTML = descriptionInput.value + ":";
        descriptionInput.value = '';
    } else {
        //alert user if the input box is empty
        showNotification();
    }
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
    if (addItemInput.value !== "") {
        //run the code below if there is a value in the input box
        let ul = document.querySelector('ul'); //get ul
        let li = document.createElement('li'); //create li
        li.innerHTML = addItemInput.value; //+ //add li value
        addButtonsToListItem(li);
        ul.appendChild(li);
        removeFirstAndLastMvBtn();
        addItemInput.value = ''; //clear input after adding the item
    } else { //alert user if the input box is empty
        showNotification();
        return; //exit function
    }
});

//remove the last item from the list on button click
removeItemButton.addEventListener('click', () => {
    let ul = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});

//write a validation function for users when they click
//..try to add sometime from an empty input box
showNotification = (message = "There is nothing in your input box. Try writing something first and then try agian.") => {
    alert(message);
    return false;
};

//make a function that removes the "remove" button when clicked
/*
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        console.log('clicked on: ');
        console.log(event.target);
        const li = event.target.parentNode;
        console.log('Getting the parent node: ');
        console.log(li);
        console.log('removing the button that is clicked');
        li.removeChild(event.target);
        // const li = event.target.parentNode;
        // li.removeChild(event.target);
    }
});
*/


//hide the last down button and the first up button
removeFirstAndLastMvBtn = () => {
    // const latestListUl = listSection.querySelector('ul');
    // const firstUpBtn = latestListUl.firstElementChild.querySelector('.upBtn');
    const firstDownBtn = latestListUl.firstElementChild.querySelector('.downBtn');
    const lastDownBtn = latestListUl.lastElementChild.querySelector('.downBtn');

    lastDownBtn.style.display = 'none';
};

//remove the first up button
//takes a list item and removes the first up button from the list
removeUpBtn = () => {
    //get the first up button of the list item

    //hide the firs up button
    firstUpBtn.style.visibility = 'hidden';
    //firstDownBtn.style.marginLeft = 'auto';
};
removeUpBtn();


//end
