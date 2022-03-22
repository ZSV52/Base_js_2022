// const myVar1 = 10;
// const myVar2 = 10;

// if (myVar1 > myVar2) {
//   console.log(`${myVar1} больше ${myVar2}`);
// } else {
//   console.log("end");
// }

// let result = myVar1 > myVar2 ? console.log(true) : console.log(false); // Тернарный оператор

// Конструкция Switch

// const userRole = "admin";

// switch (userRole) {
//   case "student":
//     console.log("Текущий пользователь - student");
//     break;
//   case "admin":
//     console.log("Текущий пользователь - admin");
//     break;
//   case "normal_user":
//     console.log("Текущий пользователь - normal_user");
//     break;
//   default:
//     console.log("Нет такого типа пользователя");
//     break;
// }

// console.log("vasya");

// Логические операторы
// && - логическое И - возвращает пепрвое значение FALSE

// || - логическое ИЛИ - возвращает пепрвое значение TRUE
// ! - логическое НЕ

// console.log(0 || 0 || "");
// console.log(1 && 2 && "строка" && 0 && 1);

// console.log(1 && 2) || (4 && 0);

// Что делает JS пошагово:
// if (1 && 0) {
//   console.log(result);
// }
// 1. Находит ключевое слово IF, понимает, что дальше - условие.
// 2. Внутри условия находит логическое И - &&.
// 3. Оператор приводит значения к булеву типу - true/false (ВАЖНО: делает это "под капотом")
// 4. 1 -> true, 0 -> false. && возвращает ЗНАЧЕНИЕ, которое является false при приведении в булев тип
// 5. В данном случае получаем 0 , который приводится в булев тип блоком if.

// Логическое НЕ
// 1. JS приводит значение после ! к булеву типу
// 2. ! меняет полученный тип на противоположный

// const myVar = !5;

// console.log(myVar);

// console.log(null || 0 || "" || undefined);
// console.log("яблоко" && true && null && 1);
// console.log(0 || (true && "123") || null);
// console.log((0 && true) || ("123" && null));
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));
// 2 + (2 - (2 + 3 * 5));

// Практика
// Задача 1

// const intervalOne = 5;
// const intervalTwo = 8;
// const intervalThree = 18;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//   console.log(`${intervalOne} - самый большой отрезок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//   console.log(`${intervalTwo} - самый большой отрезок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//   console.log(`${intervalThree} - самый большой отрезок`);
// }

// Задача 2
// const currentTmp = 36;

// if (currentTmp <= -30) {
//   console.log("Оставайтесь дома");
// } else if (currentTmp > -30 && currentTmp <= -10) {
//   console.log("Сегодня холодно");
// } else if (currentTmp > -10 && currentTmp <= 5) {
//   console.log("Не холодно");
// } else if (currentTmp > 5 && currentTmp <= 15) {
//   console.log("Тепло");
// } else if (currentTmp > 15 && currentTmp <= 25) {
//   console.log("Очень тепло");
// } else if (currentTmp > 25 && currentTmp < 35) {
//   console.log("Жарко");
// } else {
//   console.log("Пекло");
// }

// Циклы

// WHILE / DO WHILE
// let counter = 0;

// while (counter >= 0 && counter <= 10) {
//   console.log((counter += 1)); // counter = counter + 1
// }

// do {
//   console.log((counter += 1));
// } while (false);

// FOR

// const endOfLoop = 10;

// for (let counter = 0; counter <= endOfLoop; counter++) {}

// Задача 1: решить через while, do-while, for

// Задача 2:

// let carsAmount = 60; // N
// const minCarsAmount = 10; // M

// Задача 3:
// год, номер которого равен 400, - високосный;
// остальные годы, номер которых кратен 100, - НЕвискосоные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, - високосные

// const startYear = 1800;
// const endYear = 2020;

// let leapYearsAmount = 0;
// const firstSpaceTripYear = 1961;

// 1. Вывести в консоль заданную строку N раз

// const iterationText = "Итерация";

// while

// const limit = 5;
// let counter = 1;

// while (counter <= limit) {
//   console.log(`${iterationText} - ${counter}`);
//   counter++;
// }

// do {
//   console.log(`${iterationText} - ${counter}`);
//   counter++;
// } while (counter <= limit);

// FOR
// for (let counter = 1; counter <= limit; counter++) {
//   console.log(`${iterationText} - ${counter}`);
// }

// 2. Автомобили

// let carsAmount = 60; // N
// const minCarsAmount = 10; // M

// for (let day = 1; carsAmount > minCarsAmount; day++) {
//   carsAmount /= 2; // carsAmount = carsAmount / 2

//   if (carsAmount < minCarsAmount) {
//     console.log(`на ${day} день`);
//   }
// }

// 3. Високосный?

// const startYear = 1800;
// const endYear = 2020;

// let leapYearsAmount = 0;
// const firstSpaceTripYear = 1961;

// for (let counter = startYear; counter <= endYear; counter++) {
//   if (counter === firstSpaceTripYear) {
//     console.log(`${firstSpaceTripYear} - первый полёт в космос`);
//     console.log(`Количество итераций - ${counter - startYear}`);
//     break;
//   }
// }

// год, номер которого равен 400, - високосный;
// остальные годы, номер которых кратен 100, - НЕвискосоные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, - високосные

// for (let year = startYear; year <= endYear; year++) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     leapYearsAmount += 1;
//   }

//   if (year === endYear) {
//     console.log(`Количество високосных лет - ${leapYearsAmount}`);
//     console.log(`Количество итераций - ${year - startYear}`);
//   }
// }
