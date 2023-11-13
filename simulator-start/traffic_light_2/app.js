let current = 0;
let lights = [1, 3, 4, 2];
let delay = [10, 1, 8, 1];
let color = [["#200000", "red"], ["#202000", "yellow"], ["#002000", "green"]];
let bulbs = document.querySelectorAll('.l01');
let intervalId;

document.getElementById("start").onclick = function startUp() {
  if (!intervalId) {
    intervalId = setInterval(change, delay[current] * 100);
  }
};
function change() {
  for (let n = 0; n < 3; n++) {
    bulbs[n].style.backgroundColor = color[n][(lights[current] & Math.pow(2,n))/Math.pow(2,n)];
  
  }
 
  current = (current + 1) % 4;
}

document.getElementById("stop").onclick = function stopChange() {
  clearInterval(intervalId);
  intervalId = null;
 

  for (let n = 0; n < bulbs.length; n++) {
    bulbs[n].style.backgroundColor = color[n][0];
  }
};