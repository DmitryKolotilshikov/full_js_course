// prototypes - прототипы

const animal = {
    eats: true
};

const rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

// console.log(rabbit);

// --------------------------------------
const animal1 = {
    eat() {
        console.log("Я ем");
    },
};

// Создаем объект с прототипом animal
const dog = Object.create(animal1);

dog.eat(); // "Я ем" (наследуется от animal)

dog.bark = function () {
    console.log("Гав!");
};

dog.bark(); // "Гав!"

// --------------------------------------
// Функция - конструктор

function Person(name) {
    this.name = name;
}

// Добавляем метод через prototype
Person.prototype.sayHello = function () {
    console.log(`Привет, меня зовут ${this.name}`);
};

// Создаем объекты
const john = new Person("Джон");
const jane = new Person("Джейн");

john.sayHello(); // "Привет, меня зовут Джон"
jane.sayHello(); // "Привет, меня зовут Джейн"

console.log(john instanceof Person); // true
console.log(john.__proto__ === Person.prototype); // true

// --------------------------------------
// можно добавить собственные методы к встроенным объектам

Array.prototype.printElements = function () { // добавляем новые метод ко всем массивам
    this.forEach((element, index) => {        // this указывает на массив, на котором метод вызывается
        console.log(`Элемент ${index + 1}: ${element}`);
    });
};

const myArray = [10, 20, 30, 40, 50];
myArray.printElements();