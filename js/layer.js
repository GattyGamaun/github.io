let rules = document.getElementById('rules');
let timer = document.getElementById('timer');
let totalTime = null;
let cardback = null;
let result = null;

function startGame() {
    this.startPoint = Date.now();
    this.fild = document.getElementById('fild');
    this.row = row;
    this.column = column;
    this.pairs = (row * column) / 2;
    this.firstcard = null;
    this.secondcard = null;
    this.checktimeout = null;
    this.matches = 0;
    rules.style.visibility = 'hidden';
    this.fild.style.visibility = 'visible';
    this.clock = null;
    this.isOn = true;

    this.createGrid = function (row, column) {

        let array = [];
        let randomAr = [];
        for (let i = 0; i < this.pairs; i++) {
            array.push(i);
            array.push(i);
        }
        let length = array.length;

        while (array.length > 0) {
            let randomNum = Math.floor(Math.random() * array.length);
            randomAr.push(array[randomNum]);
            array.splice(randomNum, 1);
        }

        for (let x = 0; x < this.row; x++) {
            for (let y = 0; y < this.column; y++) {
                createCard(randomAr.pop(), x, y);
            }
        }
    }

    this.getTimer = function () {
        let timePassed = Date.now();
        if (isOn) {
            clock = new Date(timePassed - startPoint);
            timer.textContent = clock.getMinutes() + ':' + clock.getSeconds();
        }
    }
    this.stopTimer = function () {
        isOn = false;
        result = timer.textContent;
        console.log(result);
    }

    this.createCard = function (cardNum, posX, posY) {

        let card = document.createElement('img');
        card.src = 'assets/img/cardback-' + cardback + '.jpg';
        card.num = cardNum;
        card.style.position = 'absolute';
        card.style.top = (posY * 170) + 40 + 'px';
        card.style.left = (posX * 170) + 'px';
        card.style.background = 'white';
        card.style.borderRadius = '10px';
        card.style.marginLeft = '20px';
        card.style.marginTop = '20px';
        card.style.cursor = 'pointer';
        card.onclick = clickCard;
        fild.appendChild(card);
    }

    this.clickCard = function (e) {
        let card = e.target;
        if (checktimeout !== null) {
            clearTimeout(checktimeout);
            checktimeout = null;
            checkCards();
        }
        if (firstcard == null) {
            card.src = 'assets/img/card-' + card.num + '.png';
            firstcard = card;
        } else if (firstcard == card) {
            firstcard.src = 'assets/img/cardback-' + cardback + '.jpg';
            firstcard = null;
        } else if (secondcard == null) {
            card.src = 'assets/img/card-' + card.num + '.png';
            secondcard = card;
            checktimeout = setTimeout(checkCards, 600);
        }
    }

    this.checkCards = function () {
        if (firstcard.num == secondcard.num) {
            fild.removeChild(firstcard);
            fild.removeChild(secondcard);
            matches++;
            if (matches >= pairs) {
                gameWon();
                matches = 0;
            }
        } else {
            firstcard.src = 'assets/img/cardback-' + cardback + '.jpg';
            secondcard.src = 'assets/img/cardback-' + cardback + '.jpg';
        }
        firstcard = null;
        secondcard = null;
        checktimeout = null;
    }

    this.gameWon = function () {
        stopTimer();
        // if (localStorage.getItem('result') < result || result === null) {
            localStorage.setItem('result', result);
            // result === null;
        // }
        document.getElementById('wish').style.visibility = 'visible';
    }
    createGrid(4, 4);
}
