
//訂餐系統 增加 減少 數量
const decrease = document.getElementsById('decrease');
const add = document.getElementsById('add');
const number = document.getElementsById('number');
let num = parseInt(number.value);
decrease.onclick = function () {
    num--;
    number.value = num;    
}
add.onclick = function () {
    num++;
    number.value = num;    
}

