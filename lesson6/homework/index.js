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

// const comparison = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase() ? "Равны" : "Не равны";

// console.log(comparison("Star Wars", "star wars"));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const myString1 = "Star Wars";
// const myString2 = "wars";

// const insensitiveSearch = (str1, str2) => {
//   const isIncludes = str1.toLowerCase().includes(str2.toLowerCase());
//   return isIncludes ? "Match!" : "Mismatch!";
// };

// console.log(insensitiveSearch(myString1, myString2));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const myString = "star wars return of the jedi";

// const initCap = (str) => {
//   const result = str
//     .toLowerCase()
//     .split(" ")
//     .map((element) => {
//       return element[0].toUpperCase() + element.slice(1);
//     });
//   return result.join("");
// };

// console.log(initCap(myString));

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const myString = "StarWarsReturnOfTheJedi";

// const initSnake = (str) => {
//   const newString = str.replace(
//     /[A-ZА-ЯЁ]/g,
//     (letter) => "_" + letter.toLowerCase()
//   );
//   return newString.slice(1);
// };

// console.log(initSnake(myString));

// =============================

// const initSnake = (str) => {
//   let newString = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newString += "_" + str[i].toLowerCase();
//       continue;
//     }
//     newString += str[i];
//   }
//   return newString.slice(1);
// };

// console.log(initSnake(myString));

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const myString = "Star Wars";

// const repeatStr = (str, n) => str.repeat(n);

// console.log(repeatStr(myString, 5));

// =============================

// const repeatStr = (str, n) => {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// };

// console.log(repeatStr(myString, 5));

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const myString = "JavaScript/VideoLessons/JS/JavaScript_b7_26032022.webm";

// const path = (pathname) => {
//   const fileNameIndex = pathname.lastIndexOf("/");
//   return pathname.slice(fileNameIndex + 1);
// };

// console.log(path(myString));

// =============================

// const path = (pathname) => {
//   const pathnameToArray = pathname.split("/");
//   const filenameIndex = pathnameToArray.length - 1;

//   return pathnameToArray[filenameIndex];
// };

// console.log(path(myString));

// 15. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const str = "Ехал Грека через реку";
// const str1 = "реку";
// const str2 = "море";

// const endsWith = (str, strToFind) => {
//   const indexOfStrToCompare = str.length - strToFind.length;

//   return str.substr(indexOfStrToCompare) === strToFind;
// };

// console.log(endsWith(str, str2));

// =============================

// String.prototype.endsWith = function (subString) {
//   console.log(this.substr(0, 1));
//   if (subString.length > this.length) {
//     return false;
//   }
//   return this.substr(this.length - subString.length) === subString;
// };

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const myString = "Ехал Грека через реку";
// const myChar = "л";

// const getSubstr = (str, char, pos) => {
//   if (pos != "before" && pos != "after") {
//     return `Use "before" or "after" for pos`;
//   }
//   const indexOfChar = str.indexOf(char);
//   if (pos === "before") {
//     return str.slice(0, indexOfChar);
//   }
//   return str.slice(indexOfChar + char.length);
// };

// console.log(getSubstr(myString, myChar, "after"));

// =============================

// const getSubstr = (str, char, pos) => {
//   const lowerCasePos = pos.toLowerCase();

//   switch (lowerCasePos) {
//     case "before":
//       return str.slice(0, str.indexOf(char));
//     case "after":
//       return str.slice(str.indexOf(char) + 1);
//     default:
//       return str;
//   }
// };

// console.log(getSubstr(myString, myChar, "after"));
// Если не передать "before" или "after", то в этом случае почему-то не возвращает строку, а выдаёт ошибку. ???

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const myString = "Тут какая-то строка";
// const mySubString = "А вот тут какая-то подстрока";

// const insert = (str, substr, pos) => {
//   if (typeof pos != "number" && pos != undefined) {
//     return `please enter a number for "pos"`;
//   }
//   if (typeof pos === "number") {
//     const myNewString = str.slice(0, pos) + substr + str.slice(pos);
//     return myNewString;
//   }
//   const myNewString = substr + str;
//   return myNewString;
// };

// console.log(insert(myString, mySubString, 4));

// =============================

// const str = "Ехал Грека через реку";

// const insert = (str, substr, pos) => {
//   if (!pos) {
//     return substr + str;
//   }
//   const strToArray = str.split("");
//   strToArray.splice(pos, 0, substr);

//   return strToArray.join("");
// };

// console.log(insert(str, "Не "));
// console.log(insert(str, "Не ", 5));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const myString = "Here is a very long text about something";

// const limitStr = (str, n, symb) => {
//   if (str.length <= n) {
//     return str;
//   }
//   if (!symb) {
//     return str.slice(0, n) + "...";
//   }
//   return str.slice(0, n) + symb;
// };

// console.log(limitStr(myString, 20));
// console.log(limitStr(myString, 20, "#"));

// =============================

// const myStr = "Очень длинная строка";

// const limitStr = (str, n, symb) => {
//   if (str.length <= n) {
//     return str;
//   }
//   const endingSymb = symb ? symb : "...";

//   return str.slice(0, n) + endingSymb;
// };

// console.log(limitStr(myStr, 10));
// console.log(limitStr(myStr, 5, "№"));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const myString = "Star Wars";
// const myStrSearched = "r";

// const count = (str, stringsearch) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === stringsearch) counter += 1;
//   }
//   return `"${stringsearch}" found ${counter} times`;
// };

// console.log(count(myString, myStrSearched));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const myString = "Star       Wars   Return    Of  The Jedi     ";

// const strip = (str) => {
//   const trimStrToArr = str.trim().split(" ");

//   let newArray = [];
//   for (let i = 0; i < trimStrToArr.length; i++) {
//     if (trimStrToArr[i]) newArray.push(trimStrToArr[i]);
//   }
//   return newArray.join(" ");
// };

// console.log(strip(myString));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const myString = "Star Wars Return Of The Jedi";

// const cutString = (str, n) => str.split(" ").splice(0, n).join(" ");

// console.log(cutString(myString, 4));

// =============================

// const cutString = (str, n) => {
//   const myArr = str.split(" ");
//   let myNewArr = [];
//   for (let i = 0; i < n; i++) {
//     myNewArr.push(myArr[i]);
//   }
//   const myNewString = myNewArr.join(" ");
//   return myNewString;
// };

// console.log(cutString(myString, 4));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const myString = "Star Wars Return Of The Jedi";

// const findWord = (word, str) => {
//   let myArr = str.split(" ");
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === word) {
//       return `Yes, there is "${word}" in this string`;
//     }
//   }
//   return `No, there is no "${word}" in this string`;
// };

// console.log(findWord("Clones", myString));

// =============================

// const findWord = (word, str) => str.includes(word);
