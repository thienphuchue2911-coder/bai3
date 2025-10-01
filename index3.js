let weight = Number(prompt("Nhập cân nặng của bạn (kg):"));

// Nhập chiều cao (m)
let height = Number(prompt("Nhập chiều cao của bạn (m):"));

// Tính BMI
let bmi = weight / (height * height);

// Kiểm tra và phân loại BMI
let result = "";
if (bmi < 18.5) {
  result = "Dưới chuẩn (gầy)";
} else if (bmi < 24.9) {
  result = "Bình thường";
} else if (bmi < 29.9) {
  result = "Thừa cân";
} else {
  result = "Béo phì";
}
console.log("Cân nặng:", weight, "kg");
console.log("Chiều cao:", height, "m");
console.log("BMI của bạn là:", bmi.toFixed(2));
console.log("Phân loại:", result);