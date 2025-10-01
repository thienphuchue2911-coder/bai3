let correctUsername = "admin";
let correctPassword = "123456";


let username = prompt("Nhập tên đăng nhập:");


let password = prompt("Nhập mật khẩu:");

if (username === correctUsername && password === correctPassword) {
  console.log("Đăng nhập thành công!");
} else {
  console.log("Đăng nhập thất bại. Sai tên đăng nhập hoặc mật khẩu.");
}