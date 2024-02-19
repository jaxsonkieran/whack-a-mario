// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole
// create a function to get the mario to peep up css classList add 'up'

// Declare game variables
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const timeLeft = document.querySelector('.time-left');
const marios = document.querySelectorAll('mario');


let result = 0;
let timerId = false;
let currentTime = 60;


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




