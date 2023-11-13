// Selecteer het div-element
let divElement = document.getElementById('movingDiv');

// EventListener toevoegen voor toetsaanslagen
document.addEventListener('keydown', moveDiv);

// Functie om het div-element te verplaatsen op basis van toetsaanslagen
function moveDiv(event) {
  // Huidige positie verkrijgen
  let currentPosition = parseInt(divElement.style.left) || 0;

  // Beweeg het div-element op basis van toetsaanslag
  switch (event.key) {
    case 'ArrowRight':
    case 'd':
      // Naar rechts verplaatsen
      divElement.style.left = currentPosition + 10 + 'px';
      break;
    case 'ArrowLeft':
    case 'a':
      // Naar links verplaatsen
      divElement.style.left = currentPosition - 10 + 'px';
      break;
    // Voeg hier extra cases toe voor andere toetsen indien nodig
  }
}
