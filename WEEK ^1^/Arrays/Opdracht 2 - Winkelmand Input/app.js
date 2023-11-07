let output = document.getElementById("output");
let inputvield = document.getElementById("productnaam");
let shop = [];
function add_product() {
    let inputField = document.getElementById("productnaam");
    let productName = inputField.value;
 
    if (productName !== "") {
        shop.push(productName);
        inputField.value = "";
        updateShopDisplay();
    }
}
 
let addButton = document.getElementById("toevoegen");
addButton.addEventListener("click", add_product);
 
function updateShopDisplay() {
    let output = document.getElementById("output");
    output.textContent = "Winkelinhoud: " + shop.join(", ");
}