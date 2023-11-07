let winkelmand = ["Bananen", "Whiskey", "Chips", "Aardappelen"];
function product_toevoegen() {
    let product = prompt("Voer het product in dat u aan uw winkelmand wilt toevoegen:");
 
    if (product) {
        winkelmand.push(product);
 
        if (winkelmand.length === 5 && winkelmand[4] === "Drop") {
            let productenElement = document.getElementById("producten-lijst");
            let productenTekst = "Uw producten zijn: " + winkelmand.join(", ");
            productenElement.innerText = productenTekst;
        } else {
            let productenElement = document.getElementById("producten-lijst");
            productenElement.innerText = "U heeft geen drop.";
        }
    }
}
 
function verwijder_producten() {
    winkelmand.splice(0, 2);
    toon_winkelmand();
}
 
function toon_winkelmand() {
    let productenElement = document.getElementById("producten-lijst");
    let productenTekst = "Uw producten zijn: " + winkelmand.join(", ");
    productenElement.innerText = productenTekst;
}
 
function sorteer_winkelmand() {
    winkelmand.sort();
    toon_winkelmand();
}
 
let toevoegenKnop = document.createElement("button");
toevoegenKnop.innerText = "Product toevoegen";
toevoegenKnop.onclick = product_toevoegen;
document.body.appendChild(toevoegenKnop);
 
let productenTekst = "Uw producten zijn: " + winkelmand.join(", ");
let productenElement = document.createElement("p");
productenElement.id = "producten-lijst";
productenElement.innerText = productenTekst;
document.body.appendChild(productenElement);
