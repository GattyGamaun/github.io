let row = 0;
let column = 0;
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');

document.getElementById('startGame').onclick = function () {
    startGame();
    setInterval(getTimer);
    validForm();
}

function validForm() {
    let name = document.forms.player.name.value;
    let surname = document.forms.player.surname.value;
    let email = document.forms.player.email.value;
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
}

easy.onclick = function () {
    row = 3;
    column = 2;
    this.style.background = 'green';
    medium.style.background = 'yellowgreen';
    hard.style.background = 'yellowgreen';
}

medium.onclick = function () {
    row = 4;
    column = 3;
    this.style.background = 'green';
    easy.style.background = 'yellowgreen';
    hard.style.background = 'yellowgreen';
}

hard.onclick = function () {
    row = 4;
    column = 4;
    this.style.background = 'green';
    medium.style.background = 'yellowgreen';
    easy.style.background = 'yellowgreen';
}

document.getElementById('back-1').onclick = function () {
    cardback = 1;
    this.style.border = '4px solid green';
    this.style.boxSizing = 'border-box';
}

document.getElementById('back-2').onclick = function () {
    cardback = 2;
    this.style.border = '4px solid green';
    this.style.boxSizing = 'border-box';
}

document.getElementById('back-3').onclick = function () {
    cardback = 3;
    this.style.border = '4px solid green';
    this.style.boxSizing = 'border-box';
}

document.getElementById('back-4').onclick = function () {
    cardback = 4;
    this.style.border = '4px solid green';
    this.style.boxSizing = 'border-box';
}