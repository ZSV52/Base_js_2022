// const goToThePlace = (place) => {
//   console.log(`Иду в ${place}! Хэхэй`);
// };

// const user = {
//   name: "Ivan",
//   age: 18,
//   goToUniversity: () => goToThePlace("универ"),
// };

// user.goToUniversity();

// const nameKey = { name: "vasya " };

// const user = {
//   [nameKey]: "Ivan",
//   "min-age": 18,
// };

// console.log(user["min-age"]);

// const user = {
//   name: "Ivan",
//   age: 18,
// };

// user.name = "Petya";

// delete user.age; // Удаление поля объекта

// console.log(user);

// Практика

// const myFavoriteFilm = {
//   name: "Pirates of the Caribbean: The Curse of the Black Pearl",
//   releaseYear: 2003,
//   movieDirector: "Gore Verbinski",
//   productionCountry: "USA",
// };

// myFavoriteFilm.income = "$654 264 015";
// myFavoriteFilm.show = () => console.log(myFavoriteFilm.name);
// delete myFavoriteFilm.releaseYear;

// console.log(myFavoriteFilm);

// const myNumber = 10.123123;

// console.log(Object.getPrototypeOf(myNumber));

// console.log(myNumber.toFixed(2));

// const myNumber = 2.3e4;

// console.log(myNumber);

// paseInt - для целых чисел
// parseFloat - для дробных чисел

// console.log(parseInt("12.345a23"));
// console.log(parseFloat("12.345a23"));
// console.log(parseInt("123", 8));

// const myNumber = 123.38416546684515646545;

// if (typeof myNumber === "number") console.log("Число!");
// if (isNaN(myNumber)) console.log("Не число!");

// console.log(isFinite(10 / 2));

// console.log(Math.ceil(myNumber)); // ceil = "потолок", т.е. округление в бОльшую сторону
// console.log(Math.floor(myNumber)); // floor = "пол", т.е. округление в меньшую сторону

// console.log(Math.random());

// const myArray = [1, 4, 10, 20, 14, 15];

// console.log(Math.max(...myArray)); // ...myArray - то же самое, что 1, 4, 10, 20 и т.д.
// console.log(Math.min(...myArray));

// const myString = 'Вася вошёл в класс и сказал: \n"Привет всем"';
// console.log(myString);

// const myName = " Vasya";
// console.log(myName);
// console.log(myName.trim()); // "схлопывает" пробелы по краям строки
// <script>"очень вредоносный код"</script>;

// const myString = "with id";

// const idIndex = myString.indexOf("id");
// const newString = myString.slice(idIndex);

// console.log(newString);

// const myString = "строка, это моя строка";
// const myFunc = (str, find, replace) => {
//   str[pos];
// };

// myFunc(myString, "строка", "машина");

// Практика, моё решение первой задачи

// function randNumber(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// console.log(randNumber(1, 10));

// Практика

// 1. Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// const myFunc = (min, max) => {
//   const result = Math.random() * (max - min) + min;
//   return result.toFixed();
// };

// console.log(myFunc(1, 20));

// 2. Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

// const myStr = "сТрока";

// const isCharBig = (str, pos) => {
//   if (!str[pos]) {
//     return "Ошибка";
//   }
//   if (str[pos] === str[pos].toUpperCase()) {
//     return "Заглавная";
//   }
//   return "Не заглавная";
// };

// console.log(isCharBig(myStr, 3));

// 3. Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

// const myConst = "awije aj wa ds word asokd word aks";

// const replaceFunc = (str, findValue, replaceValue) => {
//   return str.replaceAll(findValue, replaceValue);
// };

// const replaceAll = (str, subStr, replaceStr) => {
//   for (let i = 0; i < str.length; i++) {
//     let foundIndex = str.indexOf(subStr);
//     if (foundIndex === -1) return str;
//     str =
//       str.slice(0, foundIndex) +
//       replaceStr +
//       str.slice(foundIndex + subStr.length);
//   }
//   return str;
// };

// console.log(replaceAll("widget for id", "id", "xxx"));
