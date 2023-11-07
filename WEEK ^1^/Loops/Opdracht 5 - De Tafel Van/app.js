/*let Rekenen = document.getElementById("Rekenen");
 
for (let i = 1; i <= 10; i++) {
    let result = i * 10;
    let listItem = document.createElement("li");
    listItem.textContent = i + " x 10 = " + result;
    Rekenen.appendChild(listItem);
}
*/
 
function tafel_van(getal) {
    let Rekenen = document.getElementById("Rekenen");
    Rekenen.innerHTML = "";
 
    for (let i = 1; i <= 10; i++) {
        let result = i * getal;
        let listItem = document.createElement("li");
        listItem.textContent = i + " x " + getal + " = " + result;
        Rekenen.appendChild(listItem);
    }
}
 
tafel_van(10);
 
function toonTafel() {
    let inputNumber = document.getElementById("inputNumber").value;
    if (!inputNumber) {
        alert("Voer een geldig getal in.");
        return;
    }
    tafel_van(parseInt(inputNumber, 10));
}