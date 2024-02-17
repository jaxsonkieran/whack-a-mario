// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole
// create a function to get the mario to peep up css classList add 'up'

// Declare game variables
const holes = document.querySelectorAll('.hole');

/**
 * function to get random holes/pipes for the mario to appear in
 */

function randomHole () {
    // remove the class so we get a fresh hole each time
    holes.forEach(hole => {
        hole.classList.remove('mario');
    })
// get a random number from 0 - 8, (1-9), start counting from 0
    let randomHole = holes[Math.floor(Math.random() * 9)];
    console.log(randomHole);
}

randomHole();
