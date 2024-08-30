// Объекты
/* 
В JS 7 типов данных примитивные, но объекты отностятся к ссылочным (не примитивным) типам
Объекты используются для хранения коллекций различных значений.
В JavaScript объекты используются очень часто, это одна из основ языка.

У объектов есть свойства.
Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.
*/

const log = console.log;

const hobby = "hobby";
const id = "13#smI!(#)LC";

const person = {
    name: "Dmitry",
    age: 33,
    isDeveloper: true,
    address: {
        country: "Poland",
        city: "Gdansk",
        street: "Main street 999"
    },
    0: "just 0",
    "last name": "Miracle",
    greet: function () {
        log(`Hello, I am Dmitry`)
    },
    greetSecond: () => log(`Hello, I am Dmitry`),
    [hobby]: "skiing, coding",
    id
}

log(person);
log(person.name);
log(person.age);

log(person["name"]);

log(person.isDeveloper);
log(person.isPositive); // undefined, так как свойство отсутствует. но не ошибка

log(person.address);
log(person.address.country, person.address.city, person.address.street);

// ------

// log(person.0) // error
log(person[0], person["0"]);

// log(person.last name); // error
log(person["last name"]);

delete person[0];
log(person[0], person["0"]);

// -----

person.greet();
person.greetSecond();

const firstName = person.name;
log(firstName);

person.name = "Alex";
log(person.name, firstName);

// ------

log(person.isHappy); // undefined
person.isHappy = true; // присвоили новое значение
log(person.isHappy);

// -------

log(person.hobby); // динамический ключ
log(person.id); // динамический ключ-значение

log("age" in person); // проверка на наличие свойства в объекте
log("qwerty" in person);

// ----------

const newPerson = person;
log(newPerson === person); // true, так как скопировалась ссылка на объект

newPerson.age = 20;
log(newPerson.age, person.age); // Одинаковые значения

// -----------------------------------------------------