// Nhập một số từ bàn phím
let number = Number(prompt("Nhập một số bất kỳ:"));

// Kiểm tra số chẵn/lẻ
if (number % 2 === 0) {
  console.log(number + " là số chẵn.");
} else {
  console.log(number + " là số lẻ.");
}
