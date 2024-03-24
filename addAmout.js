// 選擇 input 元素和按鈕元素  --01--
const numberInput = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');
const decreaseButton = document.getElementById('decreaseButton');
// 獲取 input 元素的當前值並轉換為數字
let currentValue = parseInt(numberInput.value);
// 添加點擊事件監聽器到按鈕
addButton.onclick = function () {
    // 將值增加 1
    currentValue++;
    // 更新 input 元素的值
    numberInput.value = currentValue;
};
decreaseButton.onclick = function () {
     if(numberInput.value !=1){
        currentValue--;                     //將值減少1
        numberInput.value = currentValue;
     }
};

// 選擇 input 元素和按鈕元素  --02--
const numberInput02 = document.getElementById('numberInput02');
const addButton02 = document.getElementById('addButton02');
const decreaseButton02 = document.getElementById('decreaseButton02');
let currentValue02 = parseInt(numberInput02.value);
// 添加點擊事件監聽器到按鈕

addButton02.onclick = function () {
    // 獲取 input 元素的當前值並轉換為數字

    // 將值增加 1
    currentValue02++;
    // 更新 input 元素的值
    numberInput02.value = currentValue02;
};

decreaseButton02.onclick = function () {
    if (numberInput02.value != 1) {
        currentValue02--;
        numberInput02.value = currentValue02;
    }

};
// 選擇 input 元素和按鈕元素  --03--
const numberInput03 = document.getElementById('numberInput03');
const addButton03 = document.getElementById('addButton03');
const decreaseButton03 = document.getElementById('decreaseButton03');
let currentValue03 = parseInt(numberInput03.value);
// 添加點擊事件監聽器到按鈕

addButton03.onclick = function () {
    // 獲取 input 元素的當前值並轉換為數字

    // 將值增加 1
    currentValue03++;
    // 更新 input 元素的值
    numberInput03.value = currentValue03;
};

decreaseButton03.onclick = function () {
    if (numberInput03.value != 1) {
        currentValue03--;
        numberInput03.value = currentValue03;
    }

};
// 選擇 input 元素和按鈕元素  --04--
const numberInput04 = document.getElementById('numberInput04');
const addButton04 = document.getElementById('addButton04');
const decreaseButton04 = document.getElementById('decreaseButton04');
let currentValue04 = parseInt(numberInput04.value);
// 添加點擊事件監聽器到按鈕

addButton04.onclick = function () {
    // 獲取 input 元素的當前值並轉換為數字

    // 將值增加 1
    currentValue04++;
    // 更新 input 元素的值
    numberInput04.value = currentValue04;
};

decreaseButton04.onclick = function () {
    if (numberInput04.value != 1) {
        currentValue04--;
        numberInput04.value = currentValue04;
    }

};