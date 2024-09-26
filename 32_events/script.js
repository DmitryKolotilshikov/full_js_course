// Events - события

const log = console.log;

const btn = document.querySelector("#btn");
const block = document.querySelector("#block");
const input = document.querySelector("#textField");
const text = document.querySelector("p");

log(btn);

// btn.onclick = () => log("кнопка была нажата");
/* 
  element.onclick (любой другой event) - не использовать для добавления событий
  это не удобный способ для событий и есть большой минус что нельзя добавлять
  несколько обработчиков на одно событие, например:

  btn.onclick = () => log("1")
  btn.onclick = () => log("2")
  .....
*/

// 💎------------ addEventListener -------------💎

// ВАЖНО - название события без приставки "on"

constBtnListener = () => {
    log("кнопка была нажата 1");
};

btn.addEventListener("click", constBtnListener)
// btn.addEventListener("click", () => {
//     log("кнопка была нажата 2");
// })

block.addEventListener("click", () => {
    log("клик по блоку");
})

input.addEventListener("input", () => {
    log("пользователь что-то ввел");
})

// вешается именно на window, не на документ
window.addEventListener("resize", () => {
    log("изменился размер окна 1");
})

// 💎------------ removeEventListener -------------💎


block.addEventListener("click", () => {
    btn.removeEventListener("click", constBtnListener);
})

// 💎------------ Объект Event -------------💎

/* 
Когда происходит событие, браузер создаёт объект события, 
записывает в него детали и передаёт его в качестве аргумента 
функции-обработчику.
*/

input.addEventListener("input", (e) => {
    // log(e);
    // log(e.type);
    // log(e.target);
    // log(e.target.nodeName);
    log(e.target.value);
});

btn.addEventListener("click", (e) => {
    log("X:", e.clientX, "Y:", e.clientY);
    log("X:", e.offsetX, "Y:", e.offsetY);
    log(e)
});

window.addEventListener("resize", (e) => {
    log(e.target.innerWidth, e.target.innerHeight)
})

text.addEventListener("copy", (e) => {
    e.preventDefault();
    log("КОПИРОВАНИЕ ЗАПРЕЩЕНО!😬");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
})