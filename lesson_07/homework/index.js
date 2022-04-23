// Презентация. Практика 1

// 1. Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const myArr = [1, -3, 2, 6, -15, 23, -13, 12];

// const getSumOfPositiveNum = (arr) => {
//   let sum = 0;
//   arr.map((el) => (el > 0 && el % 2 === 0 ? (sum += el) : 0));
//   return sum;
// };

// const getSumOfPositiveNum = (arr) => {
//   const result = arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acc, current) => acc + current);
//   return result;
// };

// console.log(getSumOfPositiveNum(myArr));

// 2. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

// const myArr = [0, 1, 2, 0, 0, 3];

// const getUniqueArray = (arr) =>
//   arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(getUniqueArray(myArr));

// ===================

// const myArr = [1, 2, 6, 7, 23, 7, 6, 1, 2, 13];

// const getUniqueArray = (arr) => Array.from(new Set(arr));

// console.log(getUniqueArray(myArr));

// ===================

// const myArr = [1, 2, 4, 4, 10, 15, 13, 13, 12];

// const getUniqueElements = (arr) => {
//   const result = [];

//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });

//   return result;
// };

// console.log(getUniqueElements(myArr));

// 3. Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const myArr1 = [1, 2, 3, 4, 5, 6];
// const myArr2 = [1, 2, 3, 4, 5, 6];

// const isArrayEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   const res = arr1.every((el, i) => el === arr2[i]);

//   return res;
// };

// console.log(isArrayEqual(myArr1, myArr2));

// Презентация. Практика 2

// 1. Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// const movie1 = { name: "The Phantom Menace" };

// const movie2 = Object.assign({}, movie1);
// const movie2 = { ...movie1 };

// movie2.name = "Attack of the Clones";

// console.log(movie1);
// console.log(movie2);

// 2. Написать функцию  которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

// const countArgsSum = (...args) => {
//   let result = 0;

//   for (let arg of args) {
//     if (arg % 2 === 0) {
//       result += arg;
//     }
//   }
//   return result;
// };

// console.log(countArgsSum(2, 5, 7, 13, 56, 4));

// 3. Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только  те значения которые есть и в первом и во втором массиве.

// const myArr1 = [1, 4, 5, 10, 22, 6, 4];
// const myArr2 = [1, 6, 8, 3, 4, 4];

// const getCommonElements = (arr1, arr2) => {
//   const newArr = [];

//   arr2.forEach(
//     (elem) => arr1.includes(elem) && !newArr.includes(elem) && newArr.push(elem)
//   );
//   return newArr;
// };

// console.log(getCommonElements(myArr1, myArr2));

// Основные задачи

// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const myArr = ["Star", "Wars", "Return", "Of", "the", "Jedi"];

// const getLengthOfStrs = (arr) => arr.map((item) => item.length);

// console.log(getLengthOfStrs(myArr));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//   const result = [];
//   numbers.reduce(
//     (accum, current, index) => (result[index] = accum + current),
//     0
//   );
//   return result;
// };

// console.log(currentSums(numbers));

// ======================

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//   const res = [];
//   const totalSum = numbers.reduce((accum, currentEl) => {
//     res.push(accum);
//     return accum + currentEl;
//   });
//   res.push(totalSum);
//   return res;
// };

// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const myArray = [2, 3, 0, 5, 4, 7, 1, 6];

// const getPairOfSumIsSeven = (arr, compareNum) => {
//   const arrCopy = [...arr];
//   const result = [];
//   for (let num of arrCopy) {
//     for (let item of arrCopy) {
//       if (num + item === compareNum) {
//         result.push([num, item]);
//       }
//     }
//   }
//   return result;
// };

// console.log(getPairOfSumIsSeven(myArray, 7));

// ======================

// const myArray = [2, 3, 0, 5, 4, 7, 1, 6, 4, 7, 1, 6];

// const getPairOfSumIsSeven = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (
//         arr[i] + arr[j] === 7 &&
//         !result.includes(`${arr[i]}:${arr[j]}`) &&
//         !result.includes(`${arr[j]}:${arr[i]}`)
//       ) {
//         result.push(`${arr[i]}:${arr[j]}`);
//       }
//     }
//   }
//   return result;
// };

// console.log(getPairOfSumIsSeven(myArray));

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const myStr = "Star Wars Return Of The Jedi";

// const getFirstCharOfStr = (str) => str.split(" ").map((char) => char[0]);

// console.log(getFirstCharOfStr(myStr));

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const myStr = "Star Wars";
// const result = [];

// const getArrOfStrings = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     result.push(str.substring(i - 1, i + 2));
//   }
//   return result;
// };

// console.log(getArrOfStr(myStr));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const myArr = [2, 6, 4, 3, 8, 0, 1, 5, 7, 9, 10];

// const getArrOfDescendingNums = (arr) => arr.sort((a, b) => b - a); // по убыванию
// const getArrOfAscendingNums = (arr) => arr.sort((a, b) => a - b); // по возрастанию

// console.log(getArrOfDescendingNums(myArr));
// console.log(getArrOfAscendingNums(myArr));

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const myArr1 = [1, 3, 2];
// const myArr2 = [9, 4, 10, 5];
// const myArr3 = [6, 8, 7, 0];

// const getSplitAndDescendedArray = (arr1, arr2, arr3) => {
//   const arrConcated = arr1.concat(arr2, arr3);
//   return getArrOfDescendingNums(arrConcated).join(" ").split();
// };

// console.log(getSplitAndDescendedArray(myArr1, myArr2, myArr3));

// ======================

// const getSplitAndDescendedArrays = (arr1, arr2, arr3) => {
//   const joinedArrays = [...arr1, ...arr2, ...arr3];
//   const sortedArray = joinedArrays.sort((a, b) => b - a);

//   return [sortedArray.join(" ")];
// };

// console.log(getSplitAndDescendedArrays(myArr1, myArr2, myArr3));

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const myArr = [[1, 2, 3], [4, 5], [6]];

// const sumOfArrayNums = (arr) => {
//   return arr.flat().reduce((acc, elem) => acc + elem, 0);
// };

// console.log(sumOfArrayNums(myArr));

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const myArr = [0, 1, 2, 3, 4, 5];

// const getReversedArray = (arr) => {
//   return arr.map((elem, index, arr) => arr[arr.length - 1 - index]);
// };

// console.log(getReversedArray(myArr));

// 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const myArr = [1, 2, 4, 7, 10, 5];

// const calcFunc = (arr) => {
//   let count = 0;

//   arr.reduce((acc, elem) => {
//     if (acc > 10) {
//       return count;
//     }
//     count++;
//     return acc + elem;
//   });

//   return count;
// };

// console.log(calcFunc(myArr));

// ======================

// const myArr = [1, 2, 4, 7, 10, 5];

// const calcValueOfElements = (arr) => {
//   return arr.reduce(
//     (elem, current) => (elem[1] < 10 ? [elem[0] + 1, elem[1] + current] : elem),
//     [0, 0]
//   )[0];
// };

// console.log(calcValueOfElements(myArr));

// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (char, value) => {
//   const result = [];
//   for (let i = 0; i < value; i++) {
//     result.push(char);
//   }
//   return result;
// };

// console.log(arrayFill("x", 5));
