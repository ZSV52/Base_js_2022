// Function declaration - объявление функции
// Function expression - функциональное выражение
// Arrow function - стрелочная функция

// function showMessage() {
//   console.log("hello");
// }

// showMessage();

// const user = "Vasya";

// function greetUser(name) {
//   console.log(`Привет, ${name}`);
// }

// greetUser(user);

// let user;

// function greetUser(name = "гость") {
//   console.log(`Привет, ${name}`);
// }

// greetUser(user);

// Function declaration

// const user = {
//   name: "Vasya",
//   age: 18,
// };

// function checkAccess(age) {
//   if (age < 18) {
//     showDeniedMsg();
//   } else {
//     showAllowedMsg();
//   }
// }
// function showAllowedMsg() {
//   console.log("Доступ разрешён");
// }
// function showDeniedMsg() {
//   console.log("Доступ запрещен");
// }

// checkAccess(user.age);

// Function expression

// const user = {
//   name: "Vasya",
//   age: 18,
// };

// const showAllowedMsg = function () {
//   console.log("Доступ разрешён"); // использовать function expression необходимо до вызова функции
// };
// function checkAccess(age) {
//   if (age < 18) {
//     showDeniedMsg();
//   } else {
//     showAllowedMsg();
//   }
// }

// function showDeniedMsg() {
//   console.log("Доступ запрещен"); // можно использовать function declaration после вызова функции
// }

// checkAccess(user.age);

// Директива return

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

// Практика
// 1. Написать функцию, которая будет принимать имя пользователя, и выводить строку с приветствием данного пользователя, если имени пользователя нет, выводить приветствие гостя.

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

// 2. Написать функцию, которая в качестве первого параметра будет принимать численное значение, а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// const calcPower = function (num, power = 1) {
//   if (typeof num !== "number") {
//     const errorMsg = "Некорректные арнументы";
//     return errorMsg;
//   }
//   return num ** power;
// };

// const result = calcPower(2, 3);

// console.log(result);

// 3. Написать функцию, которая будет принимать в качестве входного параметра массив любых, целых чисел, и будет возвращать среднее арифметическое значение данного массива*.

// const myArray = [];

// const calcAverageValue = function (arr) {
//   if (!arr.length) {
//     return "Пустой массив";
//   }
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAverageValue(myArray));

// Arrow functions

// function calcValue(a, b) {
//   const result = a + b;
//   return result;
// }

// const calcValue = (a, b) => a + b;
// то же самое, что:
// const calcValue = (a, b) => {
//   const result = a + b;
//   return result;
// };

// const result = calcValue(3, 5);
// console.log(result);

// 1

// const msgsAmount = 5;
// const message = "Сообщение";

// const showMessage = (msg, count) => {
//   for (let i = 1; i <= count; i++) {
//     console.log(`${msg} ${i}`);
//   }
// };

// showMessage(message, msgsAmount);

// 2

// const myChar = "н";

// const isMyCharVowel = (char) => {
//   const vowels = "ауоыэяюёие";

//   if (vowels.includes(char)) {
//     return "Гласная!";
//   }
//   return "Не гласная!";
// };

// console.log(isMyCharVowel(myChar));
