'use strict';

const bigBtn = document.querySelector('.big__button'),
  gadget = document.querySelector('.gadget'),
  icon = document.querySelector('.phone-icon'),
  display = document.querySelector('.calc__display'),
  clearBtn = document.querySelector('data'),
  btns = document.querySelectorAll('.button');

bigBtn.addEventListener('click', () => {
  gadget.classList.add('hidden');
  icon.classList.add('show');
});

icon.addEventListener('click', () => {
  gadget.classList.remove('hidden');
  icon.classList.remove('show');
});

function minusPlus() {
  display.value = display.value * -1;
}

function calculate(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = ' ';
}

let Result = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Error');
  } finally {
    console.log('Ok');
  }
};



