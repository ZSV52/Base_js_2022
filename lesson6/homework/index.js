// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const myString = "Star Wars";

// const stringToarray = (str) => {
//   return str.split(" ");
// };

// console.log(stringToarray(myString));

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const myString = "Star Wars";

// const deleteСharacters = (str, length) => {
//   return str.slice(0, length);
// };

// console.log(deleteСharacters(myString, 4));

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const myString = "Как здорово что все мы здесь сегодня собрались !";

// const insertDash = (str) => str.toUpperCase().replaceAll(" ", "-");

// console.log(insertDash(myString));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const myString = "star Wars";

// const firstSymbolToUpperCase = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(firstSymbolToUpperCase(myString));

// =============================

// const firstSymbolToUpperCase = (str) => {
//   return str.replace(str[0], str[0].toUpperCase());
// };

// console.log(firstSymbolToUpperCase(myString));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const myString = "star wars return of the jedi";

// const capitalize = (str) => {
//   let result = [];
//   const stringToArray = str.split(" ");

//   for (let i = 0; i < stringToArray.length; i++) {
//     const capitalizedWord = firstSymbolToUpperCase(stringToArray[i]);
//     result.push(capitalizedWord);
//   }

//   return result.join(" ");
// };

// console.log(capitalize(myString));

// ==========================

// const myString = "star wars return of the jedi";

// const capitalize = (str) => {
//   return str
//     .split(" ")
//     .map((element) => element[0].toUpperCase() + element.slice(1))
//     .join(" ");
// };

// console.log(capitalize(myString));

// ==========================

// const capitalize = (str) => {
//   const stringToArray = str.split(" ");
//   const arrWithCapitalizedElements = stringToArray.map(
//     (element) => element[0].toUpperCase() + element.slice(1)
//   );
//   return arrWithCapitalizedElements.join(" ");
// };

// console.log(capitalize(myString));

// ==========================

// const capitalize = (str) => {
//   return stringToarray(str)
//     .map((element) => firstSymbolToUpperCase(element))
//     .join(" ");
// };

// console.log(capitalize(myString));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString = "КаЖдЫй ОхОтНиК";

// const changeRegister = (str) => {
//   let reversedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       reversedStr += str[i].toLowerCase();
//       continue;
//     }
//     reversedStr += str[i].toUpperCase();
//   }
//   return reversedStr;
// };

// =======================

// const changeRegister = (str) => {
//   let newString = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newString.push(str[i].toLowerCase());
//     } else {
//       newString.push(str[i].toUpperCase());
//     }
//   }
//   return newString.join("");
// };

// console.log(changeRegister(myString));

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const myString = " 4)?Star W$#ar/s ";

// const removeChar = (str) => {
//   return str.replace(/[^a-zа-яё\s]/gi, "").trim();
// };

// console.log(removeChar(myString));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len, sign) => {
//   const zerosAdd = len - num.toString().length;
//   const zeroString = "0";

//   const zerosValue = zeroString.repeat(zerosAdd);

//   return !sign ? zerosValue + num : sign + zerosValue + num;
// };

// console.log(zeros(13, 4, "-"));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// 15. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
