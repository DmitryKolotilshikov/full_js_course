// json, local & session storage

/* 
У нас есть объект, и мы хотели бы преобразовать его в строку, 
чтобы отправить по сети или просто вывести для логирования.

JSON (JavaScript Object Notation) – это общий формат для представления
значений и объектов. Его описание задокументировано в стандарте RFC 4627
https://datatracker.ietf.org/doc/html/rfc4627

Первоначально он был создан для JavaScript, но многие другие языки также 
имеют библиотеки, которые могут работать с ним. 
Таким образом, JSON легко использовать для ОБМЕНА ДАННЫМИ по сети, когда клиент 
использует JavaScript, а сервер может быть написан на любом языке программирования.

2 основных метода для работы с JSON

- JSON.stringify для преобразования объектов в JSON.
- JSON.parse для преобразования JSON обратно в объект.
*/

const log = console.log;

const car = {
  year: new Date(2024, 3, 1),
  brand: "audi",
  color: "blue",
  power: 3.2,
  isFast: true,
  getInfo: () => log("car info"), // функции игнорируется JSON.stringify
  isExpensive: undefined, // undefined игнорируется JSON.stringify
}

log(car);

const carJSON = JSON.stringify(car);

log(carJSON);

// const carObject = JSON.parse(carJSON);
const carObject = JSON.parse(carJSON, (key, value) => {
    if (key === "year") {
        return new Date(value);
    }
    return value;
});

log(carObject);
log(carObject.year.getFullYear());

const myJSON = "{\"name\": \"Dmitry\", \"age\": 33, \"isActive\": true}";

// ТОЛЬКО "" кавычки, `` или '' кавычки для JSON не прокатят

log(myJSON);

// -------------------------------------------------
/* 
Объекты веб-хранилища localStorage и sessionStorage 
позволяют хранить пары ключ/значение в браузере

Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы 
(в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage)

Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:

setItem(key, value) – сохранить пару ключ/значение.
getItem(key) – получить данные по ключу key.
removeItem(key) – удалить данные с ключом key.
clear() – удалить всё.
key(index) – получить ключ на заданной позиции.
length – количество элементов в хранилище.
*/


const clients = [
  {id: 1, level: 3, name: "Lucy", status: "online"},
  {id: 2, level: 1, name: "Rick", status: "offline"},
  {id: 3, level: 3, name: "Jack", status: "online"},
  {id: 4, level: 2, name: "Helen", status: "online"},
  {id: 5, level: 1, name: "Alice", status: "offline"},
  {id: 6, level: 1, name: "Derek", status: "offline"},
  {id: 7, level: 3, name: "Megan", status: "online"},
];

// localStorage.setItem("test", 123);
// localStorage.removeItem("test");
// localStorage.clear();
// log(localStorage.length);
// log(localStorage.key(1));

// localStorage.setItem("clients", clients) // [object Object],....
localStorage.setItem("clients", JSON.stringify(clients));

// const clients = localStorage.getItem("clients"); // string, JSON
// const clients = JSON.parse(localStorage.getItem("clients")); 
// const clients = JSON.parse(localStorage.getItem("clients1"));  // null
// const clients = JSON.parse(localStorage.getItem("clients1") ?? "{}");  // {}

// log(clients);

// -----------------------

// sessionStorage.setItem("test", "скоро удалиться"); // удаляется когда вкладка была закрыта
