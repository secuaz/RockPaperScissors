const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';
let playerScore = 0;
let cpuScore = 0;

// Computadora elige
function computerSelection(min, max) {
    let a = Math.floor(Math.random() * (max - min) + min); // Se genera un numero al aleatorio con las condicines que se pasan por el llamado a la funcion (deberia ser en 1 y 100)
    if (a >= 0 & a <= 33) {
        alert('CPU choose rock');
        return rock;
    } else if (a >= 34 & a <= 66) {
        alert('CPU choose paper');
        return paper;
    } else {
        alert('CPU choose scissor');
        return scissor;
    }
    
}

function playRound(btn, computerSelection) {
    const player = btn;
    console.log("Seleccion Player: " + player);
    const cpu = computerSelection(1, 100);
    console.log("Seleccion CPU: " + cpu);
    if (player === rock && cpu === paper || player === paper && cpu === scissor || player === scissor && cpu === rock) {
        cpuw();
        cpuScore++;
        return updateScore();
    }  else if (player === cpu){
        alert('you are even!!');
        return updateScore();;
    } else {
        plaw();
        playerScore++;
        return updateScore();
    }
    
}
const btn = document.querySelectorAll('.button')
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            const img = button.querySelector("img");
            playerSelection = img.alt.toLowerCase();
            playRound(playerSelection, computerSelection);
        })
    })

const updateScore = function () {
    document.getElementById('pScore').innerHTML = playerScore;
    document.getElementById('cScore').innerHTML = cpuScore;
    if (playerScore === 5) {
        alert('YOU WIN!');
    } else if (cpuScore === 5) {
        alert('CPU WINS');
    }
}

const cpuw = function() {
    const content = document.querySelector('#content');
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'CPU Wins this round!';
    content.appendChild(info);
}

const plaw = function() {
    const content = document.querySelector('#content');
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'You Win this round!';
    content.appendChild(info);
}

const even = function() {
    const content = document.querySelector('#content');
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'Even round!';
    content.appendChild(info);
}

updateScore();