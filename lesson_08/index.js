// Продвинутая работа с функциями

// console.log(this); // контекстом этго this является window

// const myObject = {
//   name: "Vasya",
//   callName: () => {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// myObject.callName();

// const newObject = {
//   name: "Petya",
//   obj: myObject,
// };

// newObject.obj.callName();

// Практика

// Создать объект который будет описывать любой населенный пункт (на ваш выбор). Объект должен содержать свойства описывающие: название и численность. Так же объект должен содержать два метода: первый должен возвращать название города, а второй должен возвращать численность.
// *Дополнительно, добавить метод, который будет устанавливать новое значение для выбранного свойства из объекта описывающего город.

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// Методы работы с контекстом

// Явное указание this и вызов функции:
// 1. Метод call
// 2. Метод apply
// Привязка контекста к функции
// 3. Метод bind

// const myObject = {
//   name: "Vasya",
//   callName: function () {
//     console.log(this.name);
//   },
// };

// const newObject = {
//   name: "Petya",
// };

// myObject.callName.call(newObject);

// const say = function (phrase, phrase2) {
//   console.log(`${this.name}: ${phrase}`);
//   console.log(phrase2);
// };

// const myObject = {
//   name: "Vasya",
// };

// const newObject = {
//   name: "Petya",
// };

// const argsArray = ["Привет", "phrase"];

// say.apply(myObject, argsArray);

// // say.call(newObject, "И тебе привет!", "phrase");
// const boundFunc = say.bind(newObject, "И тебе привет!", "phrase");
// boundFunc();

// const myCity2 = {
//   name: "St. Petersburg",
//   population: 5377503,
// };

// myCity.showName.call(myCity2);
// myCity.showPopulation.call(myCity2);
// myCity.changeKeyValue.call(myCity2, "name", "NY");
// myCity.changeKeyValue.apply(myCity2, ["population", 45000]);

// const boundFunc = myCity.changeKeyValue.bind(myCity2, "name", "LA");

// boundFunc();

// console.log(myCity2);

// Замыкание

// const myFunc = () => {
//   const myVar = 5;

//   return (param) => {
//     console.log(myVar + param);
//   };
// };

// myFunc()(10);

// Каррирование

// const myFunc = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(myFunc(2)(3)(10));

// Практика

// 1. Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10.

// const myFunc = () => {
//   const height = 10;

//   return (length, width) => {
//     console.log(length * width * height);
//   };
// };

// myFunc()(5, 15);

// 2. Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

// const myFunc = (length) => {
//   return (width) => {
//     return (height) => {
//       return length * width * height;
//     };
//   };
// };

// console.log(myFunc(2)(3)(10));
