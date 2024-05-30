// Numbers (числа)

let x = 10;
x = Number(10); // 10
x = new Number(10); // object
x.valueOf() // 10

// console.log(x);

// -------------- Методы --------------

let num = 20;

// num = num.toFixed(2); // 20.00
// num = num.toFixed(3); // 20.000
// num = num.toFixed(); // 20

// num = num.toPrecision(3); // 20.0

// num = num.toString();
// console.log(typeof num);

// num = num.toString().length; // 2

// console.log(num);
console.log(num.valueOf());

const maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

const minNumber = Number.MIN_VALUE;
console.log(minNumber);

/* 
Примитив как объект
Каждый примитив имеет свой собственный «объект-обёртку», 
которые называются: String, Number, Boolean, Symbol и BigInt. 

Таким образом, они имеют разный набор методов. 
*/
