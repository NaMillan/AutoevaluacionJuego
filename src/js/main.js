'use strict';
const userOption = document.querySelector('.js-list');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-game');


function getRandomNumber(max){
 return Math.ceil(Math.random() * max);
}

const changeMov= () => {
const random=getRandomNumber(9);
let movimiento;
if (random <= 3) {
    movimiento = 'piedra';
  } else if (random >= 7) {
    movimiento = 'papel';
  } else {
    movimiento = 'tijera';
  }

  return movimiento;

};
const movimiento=changeMov();
//console.log(movimiento);

const user=() => {
    const valueSelect=userOption.value;
    if (valueSelect === movimiento) {
        result.textContent =('Empate');
    } else if (
        (valueSelect === 'piedra' && movimiento === 'tijera') ||
        (valueSelect === 'papel' && movimiento === 'piedra') ||
        (valueSelect === 'tijera' && movimiento === 'papel')
    ) {
        result.textContent =('¡Has Ganado!');
    } else {
        result.textContent =('¡Has Perdido!');
    }

}

function handleClick(event) {
event.preventDefault();
changeMov();
user();
}

btn.addEventListener('click',handleClick);


