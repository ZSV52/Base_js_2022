// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// Решение 1

// const timer = (start, end) => {
//   let current = start;
//   console.log(current);
//   if (current > end) {
//     setTimeout(() => timer(current, end), 1000);
//     current--;
//   } else {
//     console.log(`Таймер завершил работу на ${current} секунде`);
//   }
// };

// timer(35, 30);

// Решение 2

// const timer = (start, end) => {
//   --start;
//   if (start > end) {
//     console.log(start);
//     setTimeout(() => timer(start, end), 1000);
//   } else {
//     console.log(`Таймер завершил работу на ${start} секунде`);
//   }
// };

// timer(35, 30);

// 2. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

// Функция выведет глобальный объект window

// 3. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//  alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();

// 4. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// console.log(bound.test);

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password == "rockstar") ok();
//  else fail();
// }

// let user = {
//  name: 'Вася',

//  loginOk() {
//    alert(`${this.name} logged in`);
//  },

//  loginFail() {
//    alert(`${this.name} failed to log in`);
//  },

// };

// askPassword(user.loginOk, user.loginFail);

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false). Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password == "rockstar") ok();
//  else fail();
// }

// let user = {
//  name: 'John',

//  login(result) {
//    alert( this.name + (result ? ' logged in' : ' failed to log in') );
//  }
// };

// askPassword(?, ?);

// 7. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value. Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem. var elem = {value: ‘Привет’}

// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

// let func = func.bind(elem)
// //Тут напишите конструкцию с bind()

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 8. Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c;

// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(sum(1)(2)(3));
