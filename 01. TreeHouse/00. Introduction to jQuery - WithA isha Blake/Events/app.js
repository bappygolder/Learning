/*jshint esversion: 6*/

//trying out click event
//..print every element that is clicked
$('body').click((event) => {
    console.log(event.target);
});

//how I understand call back functions
/*call back functions are functions that are called/executed when something else happens (or some event/s takes place). The primary difference between a call back function and a normal function:
- normal functions are first declared and then called in the JavaScript code later on.
- a call back function is never called/written to execute later in the code. Rather they excuted based on an event that happens later. Due to this a call back function often have the following two parameters
  1. At what event the call back function will be run (or the event)
  2. What will be done or the function that will be run*/


//practice using foreach to loop over an array and show the values in the console
const arrA = [5, 14, 23, 32];

//write a function to displey the elements of the array
logArrayElement = (element, index, array) => {
    console.log('arrA[' + index + ']' + ' = ' + element);
};

arrA.forEach(logArrayElement);

// arrA.forEach((element) => {
//     console.log('Test' + arrA.element);
// });


//write a function that changes the elements of a page to it's HTML
$('ul').click(function() {
    var htmlString = $(this).html();
    $(this).text(htmlString);
    // alert('hi');
});
