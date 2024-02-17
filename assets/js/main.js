// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole
// create a function to get the mario to peep up css classList add 'up'

// Declare game variables
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const marios = document.querySelectorAll('mario');


let score = 0;


/**
 * function to get random holes/pipes for the mario to appear in
 */

function randomHole () {
    // remove the mario class if it's on any of the pipes so we get a fresh hole each time
    holes.forEach(hole => {
        hole.classList.remove('mario');
    })
// get a random number from 0 - 8, (1-9), start counting from 0
    let randomHole = holes[Math.floor(Math.random() * 9)];
    randomHole.classList.add('mario');
}

randomHole();

// Above was tested in console and random div was generated each time in the console

/**
 * fucntion randomTimePeek to get a random
 * amount of time between marios coming up
 */

// help from (ref:javascript30 coding challenge)
function randomTimePeek (min, max){
    return Math.round(Math.random() * (max - min) + min);
};

//(reference W3schools) function myFunction() {document.getElementById("myDIV").classList.add("mystyle");}
//for moles function peek() {document.getElementByClassName(.hole.up .mole).classList.add("up")}


/**
 * function to get the marios to pop up out of the pipes
 */
