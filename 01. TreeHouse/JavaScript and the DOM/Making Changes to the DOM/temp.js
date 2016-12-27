/*jshint esversion: 6 */

//different was to run function
//not here we are showing how one funciton can be encapsulated inside another

/*
function say(something) {
    console.log(something);
}

function exec(func, arg) {
    func(arg);
}

exec(say, 'JS Rocks');
*/

//function can also be passed directly inside another function

/*
function exec(func, arg) {
    func(arg);
}

exec((something) => {
    console.log(something);
}, 'Create a sandbox');
*/

/*
console.log('We\'ll print something in 2 second.');

//practical use case: WindowTimers.setTimeout() method
//https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeouts
window.setTimeout((something) => {
    console.log(something);
}, 2000, 'passing function inside another funcion');
*/

//use window.setTimeout() to create a clock
