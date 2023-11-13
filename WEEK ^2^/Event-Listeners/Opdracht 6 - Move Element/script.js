// Selecteer het div-element
var divElement = document.getElementById('movingdiv');

// Functie om het element naar rechts te verplaatsen
function moveRight() {
  // Huidige positie verkrijgen
  var currentPosition = parseInt(divElement.style.left) || 0;

  // Nieuwe positie instellen
  divElement.style.left = currentPosition + 75 + 'px';
 // Als de div buiten het scherm is, reset de positie naar de linkerkant
 if (currentPosition > window.innerWidth) {
  divElement.style.left = 0 + 'px';
}
}


// setInterval gebruiken om de moveRight-functie elke 100 milliseconden aan te roepen
setInterval(moveRight, 100);