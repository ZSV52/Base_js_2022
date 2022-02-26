// Примитивные типы данных:

// Number
// console.log(1 / 0);

// console.log(typeof NaN);

// Оператор Typeof показывает тип данных, указанный после Typeof

//String

// const myString = "строка";

// const anotherString = 'текст: "текст" текст';

// const templateString = `шаблонная строка ${anotherString}`;

// console.log(templateString);

// Boolean

// const isAdmin = true;
// const isUser = false;

// Null
// const emptyVariable = null;

// undefined
// const userName;
// consloe.log(userName);

// Непримитивные типы данных
// Object - объект

// const someName = "Petya";

// const user = {
//   name: someName,
//   lastName: "Ivanov",
//   age: 23,
//   citizenship: "Russia",
// };

// const userName = user.name;

// console.log(userName);

// Оператор typeof

// typeof null - всегда объект! Ошибка JS

// console.log(typeof null);

// Преобразование типов данных
// Строковое преобразование

// const myVar = true;

// const myVarToString = String(myVar);
// console.log(myVarToString);

// Численное преобразование

// const myVar = "aoe123";

// const myVarToNumber = Number(myVar);
// const myVarToNumber = +myVar;

// console.log(myVarToNumber);

// Логическое преобразование

// const myVar = 1;

// console.log(Boolean(myVar));
// console.log(!!myVar);

// Математические операторы
// Бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber + myString);

// Сравнение строк
// const string1 = "сТрока";
// const string2 = "солнце";

// console.log(string1 > string2);

// unicode

// const userTypes = {
//   admin: "admin",
//   user: "user",
//   teacher: "teacher",
//   contentManager: "contentManager",
// };

// const serverDataUserType = "user";

// if (serverDataUserType !== userTypes.admin) {
//   console.log("показать ограниченный контент");
// } else {
//   console.log("показать весь контент");
// }

// const myNumber = 1;
// const myString = "1";

// console.log(myNumber == myString);
