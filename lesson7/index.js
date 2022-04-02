// const myArr = [1, () => console.log("123"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr)); - метод для проверки является ли объект массивом

// const user = {
//   id: 1,
//   name: "Vasya",
//   data: [1, 2, 3, 4],
// };

// const users = [
//   { id: 1, name: "Vasya" },
//   { id: 2, name: "Petya" },
//   { id: 3, name: "Lena" },
//   { id: 4, name: "Olga" },
//   { id: 5, name: "Gennadiy" },
// ];

// Существует два варианта синтаксиса для создания пустого массива:
// let arr = new Array();
// let arr = [];
// * Рекомендуется использовать второй способ [] самый короткий.

// Примеры:

// let numbers = [1, 2, 3, 4];
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// alert( arr[1].name ); // Джон
// arr[3](); // привет

// Многомерные массивы

// const myArr = [
//   ["один", "два"], // индекс 0
//   ["три", "четыре"], // индекс 1
//   ["пять", "шесть", ["семь", "восемь"]], // индекс 2
// ];

// console.log(myArr[2][2][0]);

// const myArr = [1, 2, 3, 4, 5];

// myArr[1000] = 10;

// console.log(myArr);

// Методы добавления / удаления элементов

// const myArr = ["один", "два", "три", "четыре", "пять"];

// myArr.push("шесть", "семь"); // добавляет элемент в конец массива
// myArr.unshift("ноль"); // добавляет элемент в начало массива
// myArr.shift(); // удаляет элемент из начала массива с индексом 0
// myArr.pop(); // удаляет элемент в конце массива

// Полезные методы массивов

// find

// const myArr = ["один", "два", "три", "четыре"];
// const users = [
//   { id: 1, name: "Vasya" },
//   { id: 2, name: "Olga" },
//   { id: 3, name: "Igor" },
//   { id: 4, name: "Lena" },
//   { id: 5, name: "Petya" },
// ];

// const foundUser = users.find((user) => user.id === 1);

// const foundItem = myArr.find((elem) => elem === "два");

// Теперь то же самое, но циклом:
// let foundItem = "";

// for (let i = 0; i < myArr.length; i++) {
//   if (myArr[i] === "два") foundItem = myArr[i];
// }

// console.log(foundItem);
// console.log(foundUser);

// filter

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const numbers = [1, 2, 3, 4, 5];

// const notAdminUsers = users.filter((user) => !user.isAdmin);

// а теперь то же самое циклом
// let nonAdminUsers = [];

// for (let i = 0; i < users.length; i++) {
//   if (!users[i].isAdmin) nonAdminUsers.push(users[i]);
// }

// console.log(notAdminUsers);

// const evenNumbersArr = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbersArr);

// map

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const modifiedUsers = users.map((user) => user.name);

// const modifiedUsers = users.map((user) => {
//   return { ID: user.id, userName: user.name };
// });

// console.log(modifiedUsers);

// forEach

// reduce

// ==================

// Копирование  объектов

// let myVar = 1;
// let myVar2 = myVar;

// myVar2 = 5;

// console.log(myVar, myVar2);

// const myObject = { name: "Vasya" };
// const myObject2 = myObject;

// myObject2.name = "Petya";

// console.log(myObject, myObject2);

// const myObject = { name: "Vasya" };
// const myObject2 = Object.assign({}, myObject);
// const myObject2 = { ...myObject };

// const { name } = myObject2;
// console.log(name);

// myObject2.name = "Petya";

// console.log(myObject, myObject2);

// Оператор расширения (spread)

// const myArray = [5, 4, 2, 6];
// const myArray2 = [10, 12, 8];

// const newArray = [...myArray, ...myArray2];
// console.log(newArray);

// const myFunc = (arg1, arg2, ...args) => {
//   console.log("ARG1", arg1);
//   console.log("ARG2", arg2);
//   console.log("ARGS", args); // ARGS "завернётся" в массив
// };

// myFunc(5, 2, 4, 7, 10, 20);

// const myArray = [2, 5, 10];

// for (let element of myArray) {
//   console.log(element);
// }

// const myObject = { name: "Vasya", age: 20, gender: "male" };

// const newArr = [];

// for (let key in myObject) {
//   newArr.push(myObject[key]);
// }

// console.log(newArr);
