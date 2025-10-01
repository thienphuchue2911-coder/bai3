let price = Number(prompt("Nhập giá sản phẩm:"));
// Nhập số lượng
let quantity = Number(prompt("Nhập số lượng sản phẩm:"));

// Tính tổng tiền
let total = price * quantity;

// Giảm giá 10%
total = total - total * 0.1;

// Thêm thuế VAT 5%
total = total + total * 0.05;

console.log("Giá sản phẩm:", price);
console.log("Số lượng:", quantity);
console.log("Tổng tiền sau giảm giá và VAT:", total);

