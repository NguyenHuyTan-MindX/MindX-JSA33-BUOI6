// async
/* async function f() {
    return
}
// async/Promise <-> then
*/
// async function f() {
//     return Promise.resolve(1);
// }





// f().then(alert);

//await - async
// let value = await promise;
// await nó bắt buộc phải có async nó mới hoạt độgn
// await là không được 1 mình được
// async thì nó đi 1 mình được không await

// bài toán tiếp theo ->
//ứng dụng setTimeout
// nằm trong cái async - await - promise (resolve,reject)

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Giao bánh kem hoàn thành"), 5000)
//     });
//     let result = await promise;
//     alert(result) // done
// }
// f();
// var - let - const
// es6
// var greeting = "say hello";
// console.log(greeting);
// let greeting = "say Hi";
// console.log(greeting);
// // ở đoạn trên -> đã khai báo biến greeting
// // biến đã hiểu là say Hi, nhưng nó chỉ dừng lại ở trên
// // greeting = "say Hello lan thu 2";
// console.log(greeting);
// khi mà ta code đoạn dưới ta vẫn có thể khai báo lại
// không bị trùng say Hi -> in ra vẫn theo kết quả mới say hello lan thu 2
// let greeting = "say Hi"
// if (true) {
//     let greeting = "say hello lan thu 2";
//     console.log(greeting);

// }
// console.log(greeting);

// const greeting = "say Hi";
// greeting = "Hello lan thu 2";
// giống như let thì const tái khai báo được
// const greeting = "say Hi";
// const greeting = "say Hello lan thu 2";

// const greeting = {
//     message: "100",
//     number: "2",
// }
//console.log(greeting.message); // hello
// greeting.number = "Hello cac ban nhieu lan";
// console.log(greeting)

// setTimeout(() => { console.log("Hôm nay trời đẹp quá") }, 1000);
// setTimeout(() => { console.log("Tôi đang đi học") }, 2000);
// setTimeout(() => { console.log("Bạn ăn cơm chưa") }, 7000);
//Platform RapidAPI
// Đăng ký account - đăng nhập
// API Key - "90x92139123912"
// async function
// Người dùng muốn tìm kiếm trên trang web của mình
// bắt buộc người dùng phải đăng nhập
// resolve - đồng ý đăng nhập
// reject - đăng nhập thất bại
let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.pass');
let submitButton = document.querySelector('.submitbtn');
let userNlogin = document.querySelector('.userNlogin');
let passwordLogin = document.querySelector('.passlogin');
let loginButton = document.querySelector('.loginbtn');

const User = {
    usernames: [],
    passwords: []
}
//them tinh click
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (usernameInput.value.trim() == '' || passwordInput.value.trim() == '') {
        alert("đăng ký thành công");
        return;
    }

    else if (
        User.usernames.indexOf(usernameInput.value) !== -1) {
        alert("đăng ký thành công");
        return;
    }


    else {
        User.usernames.push(usernameInput.value)
        User.passwords.push(passwordInput.value)
        localStorage.setItem("userdata", JSON.stringify(User));

    }
})
loginButton.addEventListener('click', (e, inputUsername, inputPassword) => {
    e.preventDefault();
    let userdata = localStorage.getItem("userdata");
    let parsedData = JSON.parse(userdata);
    let password = '';
    let username = '';
    inputUsername = userNlogin.value;
    inputPassword = passwordLogin.value;

    if (inputUsername == '' || inputPassword == '') {
        alert('điền vào chỗ trống');
        return;
    }
    else {
        let passwordArrayLength = parsedData.passwords.length;
        for (let i = 0; i < passwordArrayLength; i++) {
            password = parsedData.passwords[i];
            if (password == inputPassword) {
                break;
            }
        }
        let usernameArrayLength = parsedData.passwords.length;
        for (let i = 0; i < usernameArrayLength; i++) {
            username = parsedData.usernames[i];
            if (username == inputUsername) {
                break;
            }
        }
        checkPasswordMatch(username, password, inputUsername, inputPassword);

    }
})
function checkPasswordMatch(userName, password, inputUsername, inputPassword) {
    (userName == inputUsername && password == inputPassword) ?
        alert('đăng nhập thành công') ://else//
        alert('đăng nhập thất bại');
}