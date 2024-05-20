// переменная - коробочка с данными

// декларированние let x;
// присваивание x = 1;

// переменные могу быть var, let, const
/*
var - устаревшее ключевое слово, уже не актуально для использования
оставлено для обратной совместимости
*/

var x1 = 1;
let x2 = 1;
const x3 = 1;

// cоглашения об именновании переменных
// - только буквы, цифры, нижнее подчеркивание и знак доллара
// - переменная не может начинаться с цифр

// Стили написания названий переменных
// camelCase => firstName
// lowercase => firstname
// kebab-case => first-name
// snake_case => first_name
// PascalCase => FirstName

// --------------------------------

// let a;
// a = 1;

// let a = 1, b = 2, c = 3;
// let a, b, c; 
// a = 1;

// let a = 1;
// console.log(a);

// --------------------------------

// console.log(a); // Ошибка! ReferenceError: Cannot access 'a' before initialization
// let a = 1;

// console.log(b); // Нет ошибки! Значение undefined (значение неопределенно)
// var b = 1;

// {
//     let a = 1;
//     // let, const - имеет локальную область видимости
// }
// console.log(a); // Ошибка! ReferenceError: a is not defined

// {
//     var a = 1;
//     // var - имеет глобавльную область видимости
// }
// console.log(a); // Нет ошибки! Значение логируется

// --------------------------------

let a = 1;
a = 2;
console.log(a); // 2

const b = 1; 
// b = 2; // Для константы нельзя переприсвоить значение
console.log(b); // Ошибка! TypeError: Assignment to constant variable.

// --------------------------------

// Всегда по возможности используйте const
// Всегда старайтесь давать осмысленные названия переменным

const firstName = 'Dmitry';
const age = 33;

// console.log(firstName, age);

// typeof оператор возвращает тип переменной
console.log(typeof firstName); // type string
console.log(typeof age); // type number
