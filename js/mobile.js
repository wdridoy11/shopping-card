// set mobile update price
function setMobileUpdatePrice(caseQuantity) {
   const mobilePrice = document.getElementById("mobile-price");
   const mobilePriceCount = caseQuantity * 1219;
   mobilePrice.innerText = mobilePriceCount;
}

// case plus Event Listener
document.getElementById("mobile-plus-btn").addEventListener("click", function () {
   const mobilePlus = getElementQuantityValue("mobile-field", true);
   setMobileUpdatePrice(mobilePlus);
   countSubtotalPrice();
});

// case minus Event Listener
document.getElementById("mobile-minus-btn").addEventListener("click", function () {
   const mobilePlus = getElementQuantityValue("mobile-field", false);
   setMobileUpdatePrice(mobilePlus);
   countSubtotalPrice();
})
