// setTimeout & setInterval

setTimeout(() => alert("Hello!"), 1000);
setInterval(() => console.log("Hello!"), 1000);

setTimeout(alert, 1000, "Hello");

// --------------------- манипулирование разметкой и счетчик ----------------------

setTimeout(() => {
    document.querySelector("#title").textContent = "Hello!";
}, 1000);

let counter = 1;
setInterval(() => {
    document.querySelector("#title").textContent = `Hello! ${counter++}`;
}, 1000);

// ------------------------ Часы ------------------------------

const clock = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    document.querySelector("#current-date").textContent = `${hours}:${minutes}:${seconds}`;
}

let intervalId;

intervalId = setInterval(clock, 1000);

document.querySelector("#btn").addEventListener("click", () => clearInterval(intervalId));

// ------------------------ Пример асинхронного выполнения -------------------------

setTimeout(() => alert("Hello!"), 1000);

let res = 0;
for (i = 0; i < 1222222222; i++) {
    res++;
}
console.log(res);
