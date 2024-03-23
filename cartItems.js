const addToCartButtons = document.querySelectorAll('.addToCartButton');
const cartItemsList = document.getElementById('cartItems');
const totalQuantityElement = document.getElementById('totalQuantity');
const totalPriceElement = document.getElementById('totalPrice');
const decreaseCart = document.querySelectorAll('.decreaseCart');
// 初始化購物車相關變數
let cartItems = [];
let totalQuantity = 0;
let totalPrice = 0;

// 監聽加入購物車按鈕的點擊事件
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 獲取商品資訊
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // 檢查購物車中是否已經有這個商品
        const existingItem = cartItems.find(item => item.product === productName);

        if (existingItem) {
            // 如果商品已存在，增加數量和價格
            existingItem.quantity++;
            existingItem.totalPrice += productPrice;
        } else {
            // 如果商品不存在，新增商品到購物車
            cartItems.push({ product: productName, quantity: 1, totalPrice: productPrice });
        }

        // 更新購物車顯示
        updateCartDisplay();
    });
});

decreaseCart.forEach(button => {
    
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const existingItem = cartItems.find(item => item.product === productName);

        //如果商品存在 刪除購物車產品數量
         
            if (existingItem) {
                existingItem.quantity--;
                existingItem.totalPrice -= productPrice;
            }
        

        updateCartDisplay();
    });

});

// 更新購物車顯示
function updateCartDisplay() {
    // 清空購物車列表
    cartItemsList.innerHTML = '';


    // 更新購物車商品列表和總計

    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.product} x ${item.quantity} - $${item.totalPrice.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);
        if (item.quantity == 0) {
            cartItemsList.removeChild(cartItem);
        }

    });

    // 更新總數量和總價格
    totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    totalQuantityElement.textContent = totalQuantity;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}