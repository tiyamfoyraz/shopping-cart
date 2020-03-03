var addBtn = document.getElementsByClassName("addBtn");
var substractBtn = document.getElementsByClassName("substractBtn");
var initialQuantity = document.getElementsByClassName("toggleValue");
var price = document.getElementsByClassName("price");
var subTotal = document.getElementById("subTotalValue");
var Tax = document.getElementById("taxValue");
var mainTotal = document.getElementById("mainTotalValue");
var removeItem = document.getElementsByClassName("remove-item");
var cartItem = document.getElementsByClassName("cart-item");
var WholePage = document.getElementById("WholePage");
var afterCart = document.getElementById("emptyCart");
var checkoutBtn = document.getElementById("checkoutBtn");

// first item

// addition
addBtn[0].addEventListener("click", function(){
   //Incremented Amount
   initialQuantity[0].value = ++initialQuantity[0].value;
   price[0].innerText = parseFloat(price[0].innerText) + 1219;
   subTotal.innerText = parseFloat(subTotal.innerText) + 1219;
   mainTotal.innerText = parseFloat(mainTotal.innerText) + 1219;
});

// substraction
substractBtn[0].addEventListener("click", function(){
if(initialQuantity[0].value > 1){
  initialQuantity[0].value = --initialQuantity[0].value;
   price[0].innerText = parseFloat(price[0].innerText) - 1219;
   subTotal.innerText = parseFloat(subTotal.innerText) - 1219;
   mainTotal.innerText = parseFloat(mainTotal.innerText) - 1219;
 }
});


// second item

// addition
addBtn[1].addEventListener("click", function(){
   //Incremented Amount
   initialQuantity[1].value = ++initialQuantity[1].value;
   price[1].innerText = parseFloat(price[1].innerText) + 59;
   subTotal.innerText = parseFloat(subTotal.innerText) + 59;
   mainTotal.innerText = parseFloat(mainTotal.innerText) + 59;
});

// substraction
substractBtn[1].addEventListener("click", function(){
if(initialQuantity[1].value > 1){
  initialQuantity[1].value = --initialQuantity[1].value;
   price[1].innerText = parseFloat(price[1].innerText) - 59;
   subTotal.innerText = parseFloat(subTotal.innerText) - 59;
   mainTotal.innerText = parseFloat(mainTotal.innerText) - 59;
 }
});


removeItem[0].addEventListener("click", function(){
    subTotal.innerText = parseFloat(subTotal.innerText) - price[0].innerText;
    mainTotal.innerText = parseFloat(mainTotal.innerText) - price[0].innerText;
    cartItem[0].style.display = "none";

    if(cartItem[0].style.display == "none" && cartItem[1].style.display == "none"){
    cartItem[2].style.display = "none"; 
    afterCart.style.display = "block"; 
    checkoutBtn.style.display = "none";
    }
});

removeItem[1].addEventListener("click", function(){
    cartItem[1].style.display = "none";
    subTotal.innerText = parseFloat(subTotal.innerText) - price[1].innerText;
    mainTotal.innerText = parseFloat(mainTotal.innerText) - price[1].innerText;

    if(cartItem[0].style.display == "none" && cartItem[1].style.display == "none"){
    cartItem[2].style.display = "none"; 
    afterCart.style.display = "block"; 
    checkoutBtn.style.display = "none";
    }
 });


 checkoutBtn.addEventListener("click", function(){
    WholePage.innerHTML = "<h2 class='thankYou'>Thank You For Your Purchase</h2>"
 });