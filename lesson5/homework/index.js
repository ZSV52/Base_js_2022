// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

//1

// function getSquareNum (num) {
//     return num ** 2;
// }
// console.log(getSquareNum(3));

//2

// function getSum (x,n) {
//     return (x + n);
// }
// let sum = getSum(3,9)
// console.log(sum);

//3

// function getExpression (a,b,c){
//     let exp = (a - b) / c;
//     return exp;
// }
// console.log(getExpression(10,2,4));

// let getExpression = (a, b, c) => {
//    return (a - b) / c;
// };
// console.log(getExpression(12,2,2));

//4

// function getDayOfWeek(n) {
//     if (n === 1) {
//         return 'понедельник';
//     } else if (n === 2) {
//         return 'вторник';
//     } else if (n === 3) {
//         return 'среда';
//     }else if (n === 4){
//         return 'четверг';
//     }else if (n === 5){
//         return 'пятница';
//     }else if (n === 6){
//         return 'суббота';
//     }else if (n === 7){
//         return 'воскресенье';
//     }else{
//         return 'число больше 7';
//     }
// }
// let n = 2;
// if (n !==0 || n <= 7){
//     console.log(getDayOfWeek (n));
// }else{
//     console.log('число больше 7');
// }

// function getDayOfWeek(n) {
//     switch (+n) {
//         case 1:
//             return 'понедельник';
//         case 2:
//             return 'вторник';
//         case 3:
//             return 'среда';
//         case 4:
//             return 'четверг';
//         case 5:
//             return 'пятница';
//         case 6:
//             return 'суббота';
//         case 7:
//             return 'воскресенье';
//         default:
//             return 'не то число';
//     }
// }
//  let n = '3'
// console.log(getDayOfWeek(n));

// let getDayOfWeek = (n) => {
//  return (n === 1)? 'понедельник' : (n === 2)? 'вторник' : (n === 3)? 'среда' : (n === 4)? 'четверг' : (n === 5)? 'пятница': (n === 6)? 'суббота' : (n === 7)? 'воскресенье': 'не то число';
// }
// console.log(getDayOfWeek(6));

//5

// function checkNumbersEqual(x,n) {
//     if (x === n){
//         return true;
//     }else {
//         return false;
//     }
// }
// let numbersEqual = checkNumbersEqual (5,5);
// if (numbersEqual){
//     console.log('равны');
// }else{
//     console.log('не равны');
// }

//6

// function checkSum (x,n){
//     let sum = x + n;
//     if (sum > 10){
//         return true;
//     }else{
//         return false;
//     }
// }
// let getSum = checkSum(5,2);
// if (getSum){
//     console.log('больше 10');
// }else {
//     console.log('меньше 10');
// }

//7

// function getNum (n){
//     if (Math.sign(n) === -1){
//         return true;
//     }else{
//         return false;
//     }
// }
// let num = getNum(-9);
// console.log(num);

//8

// function isNumberInRange(n) {
// if (n > 0 && n < 10) {
//     return true;
// }else{
//     return false;
// }
// }
// console.log(isNumberInRange(12));

// 9

// function isNumberInRange(n) {
//     if (n > 0 && n < 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let myArray = [3, 5, 12, 4, -7, 0, 15, 2, 8, 6];
// let newMyArray = [];
// for (let i = 0; i < myArray.length; i++) {
//     let y = myArray[i];
//     if (isNumberInRange(y)) {
//         newMyArray.push(y);
//     }
// }
// console.log(newMyArray);

//проверка как добавлять элементы по циклу в массив
// let a = 1;
// let b = 12;
// let myArray = [];
// myArray.push(a);
// myArray.push(b);
// console.log(myArray[1]);

//10

// function getDigitsSum(n) {
//     let y = n.toString();
//     let getSum = 0;
//     for (let i = 0; i < y.length; i++) {
//         getSum += +y[i];
//     }
//     return getSum;
// }
// console.log(getDigitsSum(2121));

//11

// function getDigitsSum(n) {
//     let y = n.toString();
//     let getSum = 0;
//     for (let i = 0; i < y.length; i++) {
//         getSum += +y[i];
//     }
//     return getSum;
// }
// for (let i = 1; i <= 2020; i++){
//     if (getDigitsSum(i) === 13){
//         console.log(i);
//     }
// }

//12

// function isEven(n) {
//     if (n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//13

// function isEven(n) {
//     if (n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let myArray = [3,46,12,5,6,8,1,7,9];
// let newMyArray = [];
// for(let i = 0; i< myArray.length; i++){
//     let y = myArray[i];
//     if (isEven(y)) {
//         newMyArray.push(y);
//     }
// }
// console.log(newMyArray);

//14

// let newMyArray = []
// function getDivisors (n){
//     for(let i  = 2; i < n; i++){
//         if (n % i == 0){
//             newMyArray.push(i);
//         }
//     }
//     return newMyArray;
// }
// getDivisors(22);
// console.log(newMyArray);
