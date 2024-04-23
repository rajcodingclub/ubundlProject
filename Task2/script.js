// script.js
let selectedChocolates = [];

function addToPack(chocolate) {
  if (selectedChocolates.length < 8) {
    selectedChocolates.push(chocolate);
    updatePack();
  } else {
    alert("You can only select up to 8 chocolates.");
  }
}

function updatePack() {
  const packItemsElement = document.getElementById("packItems");
  const totalPriceElement = document.getElementById("totalPrice");
  
  packItemsElement.innerHTML = "";
  
  let totalPrice = 0;
  selectedChocolates.forEach(chocolate => {
    const listItem = document.createElement("li");
    listItem.textContent = chocolate;
    packItemsElement.appendChild(listItem);
    totalPrice += 2; // Assuming each chocolate costs $2
  });
  
  totalPriceElement.textContent = "$" + totalPrice;
}
