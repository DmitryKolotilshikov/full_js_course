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
const id = "13#smIsd@!";

// const p = new Object()
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
    greet: function() {
        log("Hello, I am Dmirty! [1]")
    },
    greetSecond: () => log("Hello, I am Dmitry! [2]"),
    [hobby]: "skiing, coding",
    // id: id,
    id,
}

log(person);
log(person.name);
log(person.age);
log(person["name"]);

log(person.isDeveloper);
log(person.isPositive);
// log(person.isPositive.qwerty); // error
log(person.isPositive?.qwerty); // undefined

log(person.address);
log(person.address.country, person.address.city, person.address.street);

// ---------
// log(person.0);
log(person[0], person["0"]);

// log(person.last name);
log(person["last name"]);

delete person[0];
log(person[0]);

// ---------
person.greet();
person.greetSecond();

const prevName = person.name;
log(prevName);

person.name = "Alex";
log(person.name, prevName);

// -----------

log(person.isHappy);
person.isHappy = true;
log(person.isHappy);

// ---------------

log(person.hobby);
log(person);
log(person.id);

// --------------

log("age" in person);
log("qwerty" in person);

// --------------

const newPerson = person;
log(newPerson === person);

newPerson.age = 20;
log(newPerson === person);
log(newPerson.age, person.age);

// --------------------------------