const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle');
const gameOverText = document.querySelector('.game-over');

let isJumping = false;
let isGameOver = false;
document.addEventListener('keydown', function (event) {
    if (event.key === 'w' && !isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = 'jump 0.8s';

        setTimeout(() => {
            dinosaur.style.animation = 'none';
            isJumping = false;
        }, 800);
    }
});
function checkCollision() {
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinosaurRect.right > obstacleRect.left &&
        dinosaurRect.left < obstacleRect.right &&
        dinosaurRect.bottom > obstacleRect.top
    ) {
        gameIsOver();
    }
}

setInterval(checkCollision, 10);
function gameIsOver() {
    isGameOver = true;
    dinosaur.style.animation = 'none';
    obstacle.style.animation = 'none';
    gameOverText.style.display = 'block';
}
// Voeg toe aan bestaande JavaScript-code

let score = 0;

function startGame() {
    document.querySelector('.start-button').style.display = 'none';
    setInterval(() => {
        createObstacle();
    }, 1500);
}

function restartGame() {
    isGameOver = false;
    score = 0;
    document.getElementById('score').textContent = score;
    document.querySelector('.game-over').style.display = 'none';
    document.querySelector('.dinosaur').style.animation = 'none';
    document.querySelector('.obstacle').style.animation = 'none';
    document.querySelector('.start-button').style.display = 'block';
}

function createObstacle() {
    if (!isGameOver) {
        const newObstacle = document.createElement('div');
        newObstacle.classList.add('obstacle');
        document.querySelector('.game').appendChild(newObstacle);

        let obstacleSpeed = Math.random() * 2 + 1; // Random speed between 1 and 3
        newObstacle.style.animation = `moveLeft ${obstacleSpeed}s linear`;

        newObstacle.addEventListener('animationiteration', () => {
            newObstacle.remove();
            increaseScore();
        });
    }
}

function increaseScore() {
    if (!isGameOver) {
        score++;
        document.getElementById('score').textContent = score;
    }
}

function gameIsOver() {
    isGameOver = true;
    document.querySelector('.dinosaur').style.animation = 'none';
    document.querySelector('.obstacle').style.animation = 'none';
    document.querySelector('.game-over').style.display = 'block';
    document.querySelector('.game-over h1').textContent = 'Game Over';
    document.querySelector('.game-over p span').textContent = score;
}
