//original style
const originalHeadingColor = '#000';
const originalHeadingSize = '2em';

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
const reset = document.getElementById('reset');
const sizeInput = document.getElementById('sizeInput');
const sizeButton = document.getElementById('sizeButton');

//change heading color
myButton.addEventListener('click', () => {
    myHeading.style.color = myInput.value;
});

//change size
sizeButton.addEventListener('click', () => {
    myHeading.style.fontSize = sizeInput.value + 'px';
});


//reset button
reset.addEventListener('click', () => {
    //revert styles back to original
    myHeading.style.color = originalHeadingColor;
    myHeading.style.fontSize = originalHeadingSize;

    //reset input field values
    myInput.value = "";
    sizeInput.value = "";
});
