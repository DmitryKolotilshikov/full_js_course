// Lexical environment - Лексическое окружение
// «Лексическое окружение» – это объект

const greeting = "Hello!";

const sayHello = (name) => {
    debugger; // Scope Local - лексическое окружение вызова
    console.log(`${greeting}, ${name}`);
}

sayHello("my friends!");
