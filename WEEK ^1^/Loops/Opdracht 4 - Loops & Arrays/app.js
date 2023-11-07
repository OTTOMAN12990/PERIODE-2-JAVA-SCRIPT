var verlanglijst = [
    "Eigen Business",
    "Villa",
    "BMW M5 CS",
    "Trouwen",
    "Billionaire"
];
 
var verlanglijstElement = document.getElementById("verlanglijst");
 
for (var i = 0; i < verlanglijst.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + (i + 1) + ": " + verlanglijst[i];
    verlanglijstElement.appendChild(listItem);
}