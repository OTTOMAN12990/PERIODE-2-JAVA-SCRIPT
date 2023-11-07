/*let numberList = document.getElementById("numberList");
 
for (let i = 0; i <= 100; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
*/
 
let reverseNumberList = document.getElementById("reverseNumberList");
 
for (let i = 100; i >= 0; i--) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    reverseNumberList.appendChild(listItem);
}