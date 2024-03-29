// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole
// create a function to get the mario to peep up css classList add 'up'

// Declare game variables
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');
const mario = document.querySelectorAll('.mario');


let result = 0;
let hitTheMario;


/**
 * function to get random holes for the mario to appear in
 */

function randomHole () {
    // remove the mario class if it's on any of the squares so we get a fresh square each time
    holes.forEach(hole => {
        hole.classList.remove('mario');
    })
// get a random number from 0 - 8, (1-9), start counting from 0
    let randomHole = holes[Math.floor(Math.random() * 9)];
    randomHole.classList.add('mario');

    hitTheMario = randomHole.id
}

// Now I need a function that will record the hit or 'mousedown' on the mario each time it appears
/**
 * function that will record a hit on mousedown and add a point for every hit to the scoreboard
 */
holes.forEach(hole => {
    hole.addEventListener('mousedown', () => {
        if (hole.id === hitTheMario){
            result++
            score.textContent = result
            hitTheMario = null
        }
    })
})

/**
 * Function to get the mario to move at a set interval
 */

// I will assign this to the play button

function moveMario () {
    let timerId = null
    timerId = setInterval(randomHole, 500);
}

moveMario();






