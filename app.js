'use strict'

let display = document.querySelector('.display')
let buttons = document.querySelectorAll('.buttons__size')

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    switch (event.target.innerText) {
      case 'AC':
        display.innerHTML = '0'
        break;
      case '=':
        display.innerText = eval(display.innerText);
        break;
      case '+/-':
        display.innerText = '-';
        break;
      case '%':
        let text = display.innerText + '/100';
        display.innerText = eval(text);
        break;
      default:
      if (display.innerText === '0' && display.innerText !== '.') {
        display.innerText = event.target.innerText;
      } else {
        display.innerText += event.target.innerText;
      }
    }
  })
})