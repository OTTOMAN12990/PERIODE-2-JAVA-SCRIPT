// Selecteer het div-element
var divElement = document.getElementById('movingDiv');

// Functie om het element naar rechts te verplaatsen
function moveRight() {
  // Huidige positie verkrijgen
  var currentPosition = parseInt(divElement.style.left) || 0;

  // Nieuwe positie instellen (verplaats met 50 pixels naar rechts)
  divElement.style.left = currentPosition + 10 + 'px';
 // Als de div buiten het scherm is, reset de positie naar de linkerkant
 if (currentPosition > window.innerWidth) {
    divElement.style.left = 0 + 'px';
  }
  }

// EventListener toevoegen aan het div-element om de kleur te wijzigen bij klikken
divElement.addEventListener('click', changeColor);

// Functie om de kleur van het element te wijzigen
function changeColor() {
  // Array met 5 verschillende kleuren
  var colors = ['red', 'green', 'yellow', 'purple', 'orange'];

  // Willekeurige kleur selecteren uit de array
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Kleur van het div-element wijzigen
  divElement.style.backgroundColor = randomColor;
}

// setInterval gebruiken om de moveRight-functie elke 100 milliseconden aan te roepen
setInterval(moveRight, 100);
