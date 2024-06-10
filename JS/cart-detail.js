var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}


// ----------------- Model --------------------
var modal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

close.onclick = function () {
    closeModal();
};

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

close_footer.onclick = function () {
    closeModal();
};

order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng");
};

function updateCartTotal() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItems.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
        var quantity = quantityElement.value; // lấy giá trị trong thẻ input
        total += price * quantity;
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + " VNĐ";
}

var quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    });
}

function addItemToCart(title, price, imgSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("Sản phẩm đã có trong giỏ hàng.");
            return;
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">Xóa</button>
    </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", function () {
        cartRow.remove();
        updateCartTotal();
    });
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    });
    updateCartTotal();
}

var addToCartButtons = document.getElementsByClassName("btn-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement;
        var title = product.getElementsByClassName("content-product-h3")[0].innerText;
        var price = product.getElementsByClassName("price")[0].innerText;
        var imgSrc = product.parentElement.getElementsByClassName("img-prd")[0].src;
        addItemToCart(title, price, imgSrc);
        openModal();
    });
}

