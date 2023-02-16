// get Element Quantity Value count
function getElementQuantityValue(ElementQuantityId, isIncrease) {
   const elementField = document.getElementById(ElementQuantityId);
   const elementFieldString = elementField.value;
   const elementFieldValue = parseInt(elementFieldString);
   let elementQuantity;
   if (isIncrease) {
      elementQuantity = elementFieldValue + 1;
   } else {
      elementQuantity = elementFieldValue - 1;
   }
   elementField.value = elementQuantity;
   return elementQuantity;
}

// get price value
function updatePrice(priceValueId) {
   const priceId = document.getElementById(priceValueId);
   const priceString = priceId.innerText;
   const priceValue = parseInt(priceString);
   return priceValue;
}

// set the price value
function setPriceValue(SetPriceId, priceValue) {
   const setPrice = document.getElementById(SetPriceId);
   setPrice.innerText = priceValue;
}

// count subtotal price
function countSubtotalPrice() {
   // case price and mobile price
   const mobilePrice = updatePrice("mobile-price");
   const casePrice = updatePrice("case-price");
   const totalPrice = mobilePrice + casePrice;
   // set the subtotal price
   setPriceValue("subtotal", totalPrice)
   // set final price
   const shipping = updatePrice("shipping");
   const finalPrice = totalPrice + shipping;
   setPriceValue("final-price", finalPrice)
};
//--------------------------------------------------------
