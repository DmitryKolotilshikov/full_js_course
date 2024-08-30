// Массивы (arrays)

/* 
Если необходима упорядоченная коллекция данных, в которой присутствуют 1-й, 2-й, 3-й элементы и т.д. Например, для хранения списка пользователей, товаров, элементов и т.д.

В этом случае использовать объект неудобно, так как он не предоставляет методов управления порядком элементов. Нельзя вставить новое свойство «между» уже существующими. Объекты просто не предназначены для этих целей.

Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив.
*/

const log = console.log;

// let arr = [];
// let arr = new Array();

const numbers = [1, 10, 33, 45, 99, 130];
const arrayMix = [1, 2, "hello", true, undefined, null, {}, []];

log(numbers);
log(arrayMix);

log(numbers[0]); // выборка начинается с 0 индекса
log(numbers[1]);
log(numbers[2]);

// ---------

let x = numbers[5];
log(x);
x = numbers[5] + numbers[1];
log(x);

// ---------

numbers[5] = 1000;
log(numbers[5]);

log(numbers.length); // длина массива, сколько в нем элементов

// ----------

const newArray = new Array(1, 3, 5, "hello");
log(newArray);

// ---------

const copiedArray = numbers;
log(copiedArray === numbers);

copiedArray[0] = 999;
log(copiedArray === numbers);
log(copiedArray[0], numbers[0]);

// ----------- 

numbers.unshift(111);
numbers.push(777);
numbers.push(888);

log(numbers);

numbers.shift();
log(numbers);
numbers.pop();
log(numbers);

const lastValue = numbers.pop();
log(numbers);
log(lastValue);

/* 
    У массивов есть очень много методов, об этом подробно в след уроках
*/