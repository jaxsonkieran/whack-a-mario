// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole

const cursor = document.querySelector('.hammer');

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
});