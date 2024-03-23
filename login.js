//登入按鈕判斷
document.getElementById('loginButton').addEventListener('click', function() {
    // 獲取帳號和密碼輸入框的值
    const username = document.getElementById('uname').value.trim();
    const password = document.getElementById('psw').value.trim();

    // 刪除之前的錯誤訊息
    document.getElementById('unameError').textContent = '';
    document.getElementById('pswError').textContent = '';

    // 判斷是否有欄位空白
    if (username === '') {
        document.getElementById('unameError').textContent = '請輸入您的帳號';
    }
    if (password === '') {
        document.getElementById('pswError').textContent = '請輸入您的密碼';
    }

    if (username !== '' && password !== '') {
        // 如果都有填寫，這裡可以繼續執行登入的相關操作
        // 例如發送登入請求等等
        alert('登入成功');
    }
});

//登入按鈕判斷 第2種
/*
document.getElementById('loginButton').addEventListener('click', function() {
    // 獲取帳號和密碼輸入框的值
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // 判斷是否有欄位空白
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // 如果都有填寫，這裡可以繼續執行登入的相關操作
        // 例如發送登入請求等等
        alert('Login successful!');
    }
});
*/


// 彈出視窗
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}