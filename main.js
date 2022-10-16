const area = document.getElementById('area');
console.log(area);
let lastColor = 'blue';



const onClick = (event) => {
  const box = event.target;

  if(box.className === 'box__button' && !box.style.background) {
    box.style.background = lastColor;
    lastColor = (lastColor === 'blue') ? 'yellow' : 'blue';
  }
}


area.addEventListener('click', onClick);














































// console.log(box)

// const yellow = target.classList.add("yellow");
// const blue = target.classList.add("blue");

// box.addEventListener("click", (event) => {
//   const target = event.target;

//   if ((target.contains = 'box__button')) {
//     target.classList.add('blue');
//   };


// });
  // target.classList.contains('blue') ? target.classList.add('yellow') : target.classList.contains('blue');