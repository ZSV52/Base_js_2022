// const user = "Vasya";

// function greetUser(name) {
//   console.log(`Привет, ${name}`);
// }

// greetUser(user);

// const user = {
//   name: "Vasya",
//   age: 18,
// };

// const showAllowedMsg = function () {
//   console.log("Доступ разрешён");
// };

// function checkAccess(age) {
//   if (age < 18) {
//     showDeniedMsg();
//   } else {
//     showAllowedMsg();
//   }
// }

// function showDeniedMsg() {
//   console.log("Доступ запрещен");
// }

// checkAccess(user.age);

// function calcValue(a, b) {
//   const result = a + b;
//   return result;
// }

// const result = calcValue(3, 5);

// console.log(result);

// const user = {
//   name: "Vasya",
// };

// const greetMsg = "Привет";

// function getName(user) {
//   return user.name || "гость";
// }

// function sayHi(text, name = getName()) {
//   console.log(`${text}, ${name}!`);
// }

// sayHi(greetMsg, getName(user));

// Функция, используемая внутри функции, называется callback

// function showMsg() {
//   const myVar = 1;
//   console.log(myVar);
// }

// showMsg();

// console.log(myVar);

// const user = {
//   name: "",
// };

// const greetMsg = "Привет";

// function getName(user) {
//   return user.name || "гость";
// }

// function sayHi(text, name = getName()) {
//   console.log(`${text}, ${name}!`);
// }

// sayHi(greetMsg, getName(user));

// const calcPower = function (num, power = 1) {
//   if (typeof num !== "number") {
//     const errorMsg = "Некорректные арнументы";
//     return errorMsg;
//   }
//   return num ** power;
// };

// const result = calcPower(2, 3);

// console.log(result);

const myArray = [];

const calcAverageValue = function (arr) {
  if (!arr.length) {
    return "Пустой массив";
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverageValue(myArray));
