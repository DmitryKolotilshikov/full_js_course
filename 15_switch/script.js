/* 
Конструкция switch заменяет собой сразу несколько if.

Это более наглядный способ сравнить выражение сразу с несколькими вариантами.
*/
const log = console.log;

const x = 5 + 5;

switch(x) {
  case 3: 
    log("Мимо");
    break;
  case 6:
    log("Еще нет");
    break;
  case 10:
    log("Правильно!");
    break;
  default:
    log("Нет ответа");
}

// --------------------------------

const num = prompt("Введите число?");

switch (num) {
  case "0":
  case "1":
  case "2":
    log("числа: ноль или одни или два");
    break;
  case "3":
    log("число: три");
    break;
  case 3:
    log("Сюда не попадем, так как в case число, а не строка");
    break;
  default:
    log("сюда попадаем, если нет соответствий во всех case");
}

// --------------------------------
// const today = new Date();
const today = new Date(2024, 9, 20, 12, 30);
const month = today.getMonth();

switch(month) {
  case 0: 
    log("Январь");
    break;
  case 1:
    log("Февраль");
    break;
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    log("Март - июль");
    break;
  case 7:
    log("Август");
    break;
  case 8:
  case 9:
  case 10:
  case 11:
    log("Сентябрь - Декабрь");
    break;
  default:
    log("без даты");
}

const hour = today.getHours();

log(hour);

switch(true) {
  case hour < 12: 
    log("Доброе утро");
    break;
  case hour < 18:
    log("Добрый день");
    break;
  case hour < 22:
    log("Добрый вечер");
    break;
  default:
    log("Доброй ночи");
}
