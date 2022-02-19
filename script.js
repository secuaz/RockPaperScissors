const rock = 'Piedra';
const paper = 'Papel';
const scissor ='Tijera';
let playerScore = 0;
let cpuScore = 0;


// Jugador elige

function playerSelection() {
    const input = prompt('Choose 1. Rock, 2. Paper, 3. Scissor');
    switch (input) {
        case '1':
            alert('You choose Rock');
            return rock;
            break;
        case '2':
            alert('You choose Paper');
            return paper;
            break;
        case '3':
            alert('You choose scissors');
            return scissor;
            break;
        default:
            alert('Wrong number');

    }
    
}

// Computadora elige
function computerSelection(min, max) {
    let a = Math.floor(Math.random() * (max - min) + min); // Se genera un numero al aleatorio con las condicines que se pasan por el llamado a la funcion (deberia ser en 1 y 100)
    if (a >= 0 & a <= 33) {
        alert('CPU choose rock')
        return rock; //Devuelve variable piedra
    } else if (a >= 34 & a <= 66) {
        alert('CPU choose paper')
        return paper; // Devuelve variable papel
    } else {
        alert('CPU choose scissor')
        return scissor; // devuelve variable tijera
    }
    
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection();
    const cpu = computerSelection(1, 100);
    if (player === rock & cpu === paper) {
        alert('CPU Wins this round!');
        return cpuScore++;
    } else if (player === paper & cpu === scissor){
        alert('CPU Wins this round!');
        return cpuScore++;
    } else if (player === scissor & cpu === rock) {
        alert('CPU Wins this round!');
        return cpuScore++;
    } else if (player === cpu){
        alert('you are even!!');
        return null;
    } else {
        alert('You Wins this round!');
        return playerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++ ) {
        playRound(playerSelection, computerSelection)
        console.log('Player Score ' + playerScore);
        console.log('Computer Score ' + cpuScore);
    }
    if (playerScore > cpuScore) {
        console.log ('YOU WIN!!');
    } else {
        console.log('YOU LOOSE!!');
    }

}

game()