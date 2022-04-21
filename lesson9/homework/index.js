// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }

//   getSalary() {
//     console.log(this.rate * this.days);
//   }

//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// const workerMikhail = new Worker({
//   name: "Mikhail",
//   surname: "Gusev",
//   rate: 3000,
//   days: 22,
// });

// console.log(workerMikhail);
// workerMikhail.getFullName();
// workerMikhail.getSalary();

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }

//   getSalary() {
//     console.log(this.rate * this.days);
//   }

//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }
// class Boss extends Worker {
//   constructor(props) {
//     super(props);
//     this.workers = props.workers;
//   }

//   getSalary() {
//     console.log(this.rate * this.days * this.workers);
//   }
// }

// const bossMax = new Boss({
//   name: "Max",
//   surname: "Payne",
//   rate: 5000,
//   days: 22,
//   workers: 3,
// });

// console.log(bossMax);
// bossMax.getFullName();
// bossMax.getSalary();

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//   #name = "";
//   #surname = "";
//   #rate = "";
//   #days = "";

//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }

//   get getName() {
//     console.log(this.#name);
//   }

//   get getSurName() {
//     console.log(this.#surname);
//   }

//   get getRate() {
//     console.log(this.#rate);
//   }

//   get getDays() {
//     console.log(this.#days);
//   }

//   getSalary() {
//     console.log(this.#rate * this.#days);
//   }

//   getFullName() {
//     console.log(`${this.#name} ${this.#surname}`);
//   }
// }

// const workerMikhail = new Worker({
//   name: "Mikhail",
//   surname: "Gusev",
//   rate: 3000,
//   days: 22,
// });

// console.log(workerMikhail);
// workerMikhail.getName;
// workerMikhail.getSurName;
// workerMikhail.getRate;
// workerMikhail.getDays;
// workerMikhail.getFullName();
// workerMikhail.getSalary();

// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   #name = "";
//   #surname = "";
//   #rate = "";
//   #days = "";

//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }

//   get getName() {
//     console.log(this.#name);
//   }

//   get getSurName() {
//     console.log(this.#surname);
//   }

//   get getRate() {
//     console.log(this.#rate);
//   }

//   set setRate(newRate) {
//     this.#rate = newRate;
//   }

//   get getDays() {
//     console.log(this.#days);
//   }

//   set setDays(newDays) {
//     this.#days = newDays;
//   }

//   getSalary() {
//     console.log(this.#rate * this.#days);
//   }

//   getFullName() {
//     console.log(`${this.#name} ${this.#surname}`);
//   }
// }

// const workerMikhail = new Worker({
//   name: "Mikhail",
//   surname: "Gusev",
//   rate: 3000,
//   days: 22,
// });

// console.log(workerMikhail);
// workerMikhail.getName;
// workerMikhail.getSurName;
// workerMikhail.setRate = 5000;
// workerMikhail.setDays = 31;
// workerMikhail.getFullName();
// workerMikhail.getSalary();

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  constructor(props) {
    this.str = props.str;
  }
  reverse() {
    console.log(this.str.split("").reverse().join(""));
  }
  ucFirst() {
    console.log(this.str[0].toUpperCase() + this.str.slice(1));
  }
  ucWords() {
    const capitalize = (str) => {
      return str
        .split(" ")
        .map((elem) => elem[0].toUpperCase() + elem.slice(1))
        .join(" ");
    };
    console.log(capitalize(this.str));
  }
}

const newString = new MyString({ str: "star wars return of the jedi" });

newString.reverse();
newString.ucFirst();
newString.ucWords();

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
