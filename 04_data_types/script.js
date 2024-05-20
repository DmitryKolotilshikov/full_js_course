// есть 8 основных типов данных
// number, bigint, string, boolean, null, undefined, symbol, object

// Number
const age = 28;
console.log(typeof age);

// String
const firstName = 'Dmitry Ko';
console.log(typeof firstName);

// bigint
const bigNumber = 1231241212421422223243242n;
console.log(typeof bigNumber);

// boolean
const isActive = true;
const isConfirmed = false;
console.log(typeof isActive);

// null
const city = null; // ничего, пусто
console.log(typeof city); // Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

// undefined
let isLoading; 
console.log(isLoading); // undefined
console.log(typeof isLoading); // undefined
isLoading = false;

// symbol
const id = Symbol('123'); // для уникальных идентификаторов в объектах
console.log(typeof id);

// Ссылочные типы | Reference Types
// object
const person = {
    name: 'Alex',
    age: 24,
}
console.log(person);
console.log(typeof person);

const numArr = [1,2,3,4,5];
console.log(numArr);
console.log(typeof numArr);

function info() {
    return 'Hello World!';
}
console.log(typeof info) // function

// в JavaScript по сути всё объект
console.log(Number.prototype);
console.log(Object.getOwnPropertyNames(Number.prototype));
