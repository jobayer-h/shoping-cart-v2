function cartOparator(totalPrice,itemUnit,price, isInscrease) {
// unit calculation    
    const unit = parseInt(document.getElementById(itemUnit).value);
    if (isInscrease == true) {
        newUnit = unit + 1;
    } else {
        newUnit = unit - 1;
    }
    if (newUnit < 0 ) {
        alert("you can't buy negetive number of product");
        return;
    }
    document.getElementById(itemUnit).value = newUnit;
// unit price calculation
    const unitTotal = newUnit * price;
    document.getElementById(totalPrice).innerText = unitTotal;
// subtotal calculation
    const subTotal = parseFloat(document.getElementById('subTotal').innerText);
    if (isInscrease == true) {
        newSubTotal = subTotal + price;
    } else {
        newSubTotal = subTotal - price;
    }
    document.getElementById('subTotal').innerText = newSubTotal;
// tex calculation
    const tex = Math.round(eval(newSubTotal * 0.06));
    document.getElementById('tex').innerText = tex;
// total payable ammount calculation
    const total = newSubTotal + tex;
    document.getElementById('total').innerText = total;   
}
// remove item from the cart
function remItem(id) {
    document.getElementById(id).style.display = 'none';
}
// checkout button function
function checkOut(){
    document.getElementById('thanks').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
}