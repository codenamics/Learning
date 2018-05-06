let minNum = document.querySelector('.min-num');
let maxNum = document.querySelector('.max-num');
let numInput = document.querySelector("#guess-input");
let btn = document.querySelector('#guess-btn');
let messageOut = document.querySelector('.message');
let gameWrapper = document.querySelector('#game');

let min = 1;
let max = 10;
let winningNum = numGenerator(min, max);
let tryLeft = 3
console.log(winningNum);
minNum.textContent = min;
maxNum.textContent = max;

gameWrapper.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
});

btn.addEventListener('click', function() {
    let guess = parseInt(numInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        message(`Please set min-max between ${min} and ${max}`, 'red')
    }
    if (guess === winningNum) {
        message(`You WON!`, 'green');
        playAgain(true, 'Play again', 'play-again')
    } else {
        if (guess !== winningNum) {
            message(`Numer incorect Guesses left ${tryLeft}, Try again`, 'red')
            tryLeft -= 1;
            numInput.value = '';
            if (tryLeft === 0) {
                message(`GAME OVER, Correct number is ${winningNum}`, 'red')
                playAgain(true, 'Play again', 'play-again')
            }
        }
    }
});

function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playAgain(disable, val, addClass) {
    numInput.disabled = disable;
    btn.value = val;
    btn.classList = addClass;
}

function message(msg, color) {
    messageOut.textContent = msg;
    messageOut.style.color = color;
}