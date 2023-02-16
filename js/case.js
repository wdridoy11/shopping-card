// set case update price
function setCaseUpdatePrice(caseQuantity) {
   const casePrice = document.getElementById("case-price");
   const casePriceCount = caseQuantity * 59;
   casePrice.innerText = casePriceCount;
}

// case minus Event Listener
const caseMinusBtn = document.getElementById("case-minus-btn")
caseMinusBtn.addEventListener("click", function () {
   const caseFieldCount = getElementQuantityValue("case-field", false);
   setCaseUpdatePrice(caseFieldCount);
   countSubtotalPrice();
   console.log(caseFieldCount)
   // const inputFiled = document.getElementById("input-filed");
   // const deleteBtn = document.getElementById("delete-btn")
   // inputFiled.addEventListener("keyup", function (event) {
   // const textMatch = event.target.value;
   if (caseFieldCount <= 1) {
      caseMinusBtn.setAttribute("disabled", true);
   } else {
      caseMinusBtn.removeAttribute("disabled")
   }
});

// case plus Event Listener
document.getElementById("case-plus-btn").addEventListener("click", function () {
   const caseFieldCount = getElementQuantityValue("case-field", true);
   setCaseUpdatePrice(caseFieldCount);
   countSubtotalPrice();
});