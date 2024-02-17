// create function that counts down time
//  create function that holds the score
// create function that produces the mario in a random hole

// const cursor = document.querySelector('.hammer');

// window.addEventListener('mousemove', e => {
//     cursor.style.top = e.pageY
//     cursor.style.left = e.pageX
// });


// Code with help of freecodecamp - https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/
const cursorHammer = document.querySelector('.hammer');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorHammer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
   
}

window.addEventListener('mousemove', moveCursor);