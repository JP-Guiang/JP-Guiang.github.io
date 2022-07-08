let count = 0
function displayCart() {
  document.getElementById('cart').innerHTML = 'Items in Cart: ' + count
}

function addToCart() {
  count++
  displayCart()
}

document.getElementById('addToCart').onclick = addToCart
