/*
const btnEl = document.getElementById('test-this')

const john = {
    addEvent() {
        btnEl.addEventListener('click', this.handleClick);
    },
    handleClick() {
        console.log('handleClick', this);
    }
}

john.addEvent();

john.handleClick(); // this = john
*/

'use strict';
function sayHello() {
    console.log('Hello', this);
}

sayHello();
this.sayHello();
globalThis.sayHello();
window.sayHello();
