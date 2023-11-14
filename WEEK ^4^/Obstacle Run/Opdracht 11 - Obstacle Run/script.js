const dinosaur = document.querySelector('.dinosaur');
const gameOverText = document.querySelector('.game-over');
let isJumping = false;
let isGameOver = false;
let score = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'w' && !isJumping && !isGameOver) {
        jump();
    }
});

function jump() {
    isJumping = true;
    dinosaur.style.animation = 'jump 0.8s';

    setTimeout(() => {
        dinosaur.style.animation = 'none';
        isJumping = false;
    }, 800);
}

function checkCollision() {
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const obstacles = document.querySelectorAll('.obstacle');

    obstacles.forEach((obstacle) => {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            dinosaurRect.right > obstacleRect.left &&
            dinosaurRect.left < obstacleRect.right &&
            dinosaurRect.bottom > obstacleRect.top
        ) {
            gameIsOver();
        }
    });
}

setInterval(checkCollision, 10);

function gameIsOver() {
    isGameOver = true;
    document.querySelectorAll('.obstacle').forEach((obstacle) => {
        obstacle.style.animation = 'none';
    });
    gameOverText.style.display = 'block';
    gameOverText.querySelector('h1').textContent = 'Game Over';
    gameOverText.querySelector('p span').textContent = score;
}

function startGame() {
    document.querySelector('.start-button').style.display = 'none';
    generateObstacle();
}

function generateObstacle() {
    createObstacle();
    setTimeout(() => {
        if (!isGameOver) {
            generateObstacle();
        }
    }, 1500);
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

function restartGame() {
    isGameOver = false;
    score = 0;
    document.getElementById('score').textContent = score;
    document.querySelector('.game-over').style.display = 'none';
    document.querySelector('.dinosaur').style.animation = 'none';
    document.querySelectorAll('.obstacle').forEach((obstacle) => {
        obstacle.remove();
    });
    document.querySelector('.start-button').style.display = 'block';
}

