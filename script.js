let text1 = "Привіт";
let text2 = "Hello";

if (text1 != "" && text2 != "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

let a = 6;
let b = 7;
let sum = a + b;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let text = "Я вивчаю JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let num = 15;

if (num > 10 && num < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const name = "Андрій";
const email = "andriy@gmail.com";
const password = "123456";

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
