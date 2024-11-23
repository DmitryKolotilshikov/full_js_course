// Classes - Классы

const log = console.log;

// ------- Базовый синтаксис --------
/* 
    class MyClass {
        // методы класса
        constructor() { ... }
        method1() { ... }
        method2() { ... }
        method3() { ... }
        ...
    }

    - Вызов new MyClass() создает новый объект со всеми перечисленными методами;
    - При этом автоматически вызывается метод constructor(), в нём можно инициализировать объект;
*/

class User {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        log(`Hello, I am ${this.name}`)
    }
    greet = () => {
        log(`Hello, I am ${this.name}`)
    }
}

const userAlex = new User("Alex");
userAlex.greeting();

const userOlga = new User("Olga");
userOlga.greet();


// В JavaScript класс – это разновидность функции 
log(typeof User); // function

// ------- new Function - Функция-конструктор --------

function UserFnClass (name) {
    this.name = name;

    this.greeting = function () {
        log(`Hello, I am ${this.name}`)
    }
}

UserFnClass.prototype.greet = function () {
    log(`Hello, I am ${this.name}`)
}

/* 
    со стрелочной функцией тут потеря контекста (this)

    UserFnClass.prototype.greet = () => {
        log(`Hello, I am ${this.name}`)
    } 
*/

const userFnVlad = new UserFnClass("Vlad");

log(userFnVlad.name);
userFnVlad.greeting();
userFnVlad.greet();

// ------- Геттеры и Сеттеры. Класс с приватными полями --------

class User1 {
    profession = "software engineer";
    #skills = "";

    constructor(name) {
        this.name = name;
    }

    get skills() {
        return this.#skills;
    }
    set skills(newSkills) {
        if (typeof newSkills !== "string") return;
        this.#skills = newSkills;
    }
}

const userAnna = new User1("Anna");

log(userAnna.profession);

userAnna.profession = "developer"
log(userAnna.profession);

log(userAnna.skills);

userAnna.skills = "html, css, js, ts, react";
userAnna.skills = 111;
log(userAnna.skills);

// ------- Класс со стическими методами и свойствами --------

class User2 {
    static #instanceCount = 0;

    constructor(name) {
        this.name = name;
        User2.#instanceCount++;
    }

    greeting() {
        log(`Hello, I am ${this.name}`)
    }

    static getInstanceCount() {
        return log(User2.#instanceCount);
    }
}

const userKen = new User2("Ken");
userKen.greeting();

const userNatalia = new User2("Natalia");
userNatalia.greeting();

User2.getInstanceCount();
