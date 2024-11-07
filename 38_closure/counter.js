// Замыкание - closure

const log = console.log;

const createCounter = () => {
    let count = 0; // переменная будет доступна из функции ниже

    return () => {
        count += 1;
        return count;
    };
}

const counter = createCounter();

// debugger;
log(counter()); // 1
log(counter()); // 2
log(counter()); // 3