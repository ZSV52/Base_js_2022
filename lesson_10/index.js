// DOM

// console.log(window);
// console.log(location);
// console.log(screen);

// console.log(document.head);

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");
// console.log(block2.parentElement); // узел-родитель у block2
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне
// console.log(block2.nextElementSibling); // следующий элемент на том же уровне
// console.log(block2.firstElementChild); // первый дочерний элемент
// console.log(block2.lastElementChild); // первый дочерний элемент

// Поиск элементов в DOM

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");

// console.log(document.getElementById("block-1"));

// console.log(document.getElementsByTagName("div"));

// console.log(document.querySelectorAll("div"));

// const link = document.querySelector("a");
// const input = document.querySelector("input");

// console.log(link);
// console.log(input);

// console.log((document.body.innerHTML += "123"));
// console.log(document.body);

// console.log(document.body.innerText);

// const block1 = document.querySelector("#block-1");
// block1.innerHTML = "";
// console.log(block1.outerHTML);

// Работа со стилями
// const block1 = document.querySelector("#block-1");
// block1.className = "div-block";
// block1.classList.add("block");
// block1.classList.remove("block");
// block1.style.backgroundColor = "grey";
// block1.style.width = "100px";

// Создание элемента
// document.body.style.margin = "0";

// const header = document.createElement("header");
// header.className = "page-header";
// header.style.background = "yellow";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.innerHTML = "Это шапка сайта";
// document.body.prepend(header);

// console.log(header);
