const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(function(button) {
    button.addEventListener('click', function(e) {
        player = e.target.id;
        playerChoice.textContent = "Your Choice: " + player;
    });
});
let player, computer, result;
// Functie om de keuze van de computer te genereren
function generateComputerChoice() {
    // Genereer een random getal tussen 1 en 3
    const randomNummer = Math.floor(Math.random() * 3) + 1;

    // Wijs waarden toe aan computer op basis van het random getal
    if (randomNummer === 1) {
        computer = "rock";
    } else if (randomNummer === 2) {
        computer = "paper";
    } else if (randomNummer === 3) {
        computer = "scissors";
    }

    // Toon de keuze van de computer in het computerChoice-element
    computerChoice.textContent = "Computer's Choice: " + computer;
}
// Functie om het resultaat van het spel te bepalen
function getResult() {
    // Controleer wie er gewonnen/verloren heeft of dat het gelijkspel is
    if (computer === player) {
        result = "Gelijkspel";
    } else if ((computer === 'rock' && player === 'paper') ||
               (computer === 'paper' && player === 'scissors') ||
               (computer === 'scissors' && player === 'rock')) {
        result = "Je hebt gewonnen!";
    } else {
        result = "Je hebt verloren!";
    }

    // Toon het resultaat in het resultOutput-element
    resultOutput.textContent = "Resultaat: " + result;
}