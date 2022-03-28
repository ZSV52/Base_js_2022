// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function numPower(myNum){
//     return myNum**2;
// }
// console.log(numPower(5))

// const numPower = (myNum) => {
//   if (isNaN(myNum)) {
//     return "Нужно указать число!";
//   }
//   return myNum ** 2;
// };

// console.log(numPower("cat"));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// const numSum = (num1, num2) => num1 + num2;

// console.log(numSum(3, -3));

// const numSum = (num1, num2) => {
//   if (isNaN(num1) || isNaN(num2)) {
//     return "Один из параметров указан неверно!";
//   }
//   return num1 + num2;
// };

// console.log(numSum(3, 4));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// const calcValue = (a, b, c) => {
//   const result = (a + b) / c;
//   return result;
// };

// console.log(calcValue(3, 1, 2));

// const calcValue = (a, b, c) => {
//   if (
//     (isNaN(parseFloat(a)) && isFinite(a)) ||
//     (isNaN(parseFloat(b)) && isFinite(b)) ||
//     (isNaN(parseFloat(c)) && isFinite(c))
//   ) {
//     return "Один из параметров указан неверно!";
//   }
//   return (a + b) / c;
// };

// console.log(calcValue(3, 5, 2));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const getDayOfWeek = (i) => {
//   switch (i) {
//     case 1:
//       return "понедельник";
//       break;
//     case 2:
//       return "вторник";
//       break;
//     case 3:
//       return "среда";
//       break;
//     case 4:
//       return "четверг";
//       break;
//     case 5:
//       return "пятница";
//       break;
//     case 6:
//       return "суббота";
//       break;
//     case 7:
//       return "воскресенье";
//       break;
//     default:
//       return "Указанное значение не соответствует дню недели";
//       break;
//   }
// };

// console.log(getDayOfWeek(10));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const comaparisonValue = (a, b) => {
//   return a === b;
// };

// console.log(comaparisonValue(1, 3));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// const comparisonSumValue = (a, b) => {
//   return a + b > 10;
// };

// console.log(comparisonSumValue(10, 3));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const checkNumberIsNegative = (a) => a < 0;

// console.log(checkNumberIsNegative(10));

// function checkNumberIsNegative(myNum) {
//   if (typeof myNum !== "number") {
//     const errorMsg = "Нужно указать число!";
//     return errorMsg;
//   }
//   return myNum < 0;
// }

// console.log(checkNumberIsNegative(" "));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (myNum) => {
//   if (typeof myNum !== "number") {
//     const errorMsg = "Нужно указать число!";
//     return errorMsg;
//   }
//   return myNum > 0 && myNum < 10;
// };

// console.log(isNumberInRange(10));

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const myArr = [10, 1, 2, 13, 25, 3, 4, 18, 5];

// const getNewArray = (arr) => {
//   let myNewArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//       myNewArr.push(arr[i]);
//     }
//   }
//   return myNewArr;
// };

// console.log(getNewArray(myArr));

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (num) => {
//   if (typeof num !== "number" || num % 1 != 0) {
//     const errorMsg = "Это не целое число!";
//     return errorMsg;
//   }
//   const newNumToStr = num.toString();
//   let sum = 0;
//   for (let i = 0; i < newNumToStr.length; i++) {
//     sum += +newNumToStr[i];
//   }
//   return sum;
// };

// console.log(getDigitsSum(13.8));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// let myArrOfYears = [];
// for (let year = 1; year <= 2020; year++) {
//   if (getDigitsSum(year) === 13) {
//     myArrOfYears.push(year);
//   }
// }
// console.log(myArrOfYears);

// for (let year = 1; year <= 2020; year++) {
//   if (getDigitsSum(year) === 13) {
//     console.log(year);
//   }
// }

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (num) => {
//   if (typeof num !== "number" || num % 1 !== 0) {
//     const errorMsg = "Это не целое число!";
//     return errorMsg;
//   }
//   return num % 2 === 0;
// };

// console.log(isEven(" "));

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const myArr = [10, 2, 5, 3, 8, 19, 32, 7, 44];
// let myEvenArr = [];

// for (i = 0; i < myArr.length; i++) {
//   if (isEven(myArr[i])) {
//     myEvenArr.push(myArr[i]);
//   }
// }
// console.log(myEvenArr);

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (num) => {
//   let divisorsArr = [];

//   for (let i = num; i > 0; i--) {
//     if (num % i === 0) {
//       divisorsArr.push(i);
//     }
//   }
//   return divisorsArr;
// };

// console.log(getDivisors(20));

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// P.S.

// Если нужна действительно точная проверка на число, которая не считает числом строку из пробелов, логические и специальные значения - используйте следующую функцию isNumeric:

// function isNumeric(num) {
// 	return !isNaN(parseFloat(num)) && isFinite(num);
// }
