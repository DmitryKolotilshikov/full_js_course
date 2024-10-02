// Events - propagation & delegation
// 1 - Погружение и всплытие событий (events capture and bubbling)
// 2- Делегирование событий (events delegation)

const log = console.log;

// 💎 --- Погружение и всплытие событий (events capturing and bubbling) --- 💎
/* 
 - Всплытие -
Когда на элементе происходит событие, обработчики сначала срабатывают на
нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
*/

const container = document.querySelector("[data-container]");

// container.addEventListener("click", () => {
//     log("обработчик контейнера сработал!");
// })

document.addEventListener("click", () => log("клик по всему документу!"));

container.addEventListener("click", (e) => {
    // запрещает всплытие и погружение
    // e.stopPropagation(); 
    // останавливает обработку событий на этом же элементе, если есть еще события
    // e.stopImmediatePropagation(); 
    log("1) обработчик контейнера сработал!");
});

// container.addEventListener("click", () => {
//     log("2) обработчик контейнера сработал!");
// });

/* 
Погружение
В современной разработке стадия погружения используется очень редко, 
обычно события обрабатываются во время всплытия.

3й аргумент функции addEventListener или просто true или {capture: true}
*/

document.addEventListener("click", () => log("клик по всему документу!"), true);

container.addEventListener("click", () => {
    log("2) обработчик контейнера сработал!");
}, true);


// 💎 --- Делегирование событий --- 💎
/* 
Всплытие и погружение являются основой для «делегирования событий» –
очень мощного приёма обработки событий.
*/

const table = document.createElement("table");

for (let row = 0; row < 100; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 50; col++) {
        const td = document.createElement("td");
        td.dataset.cell = `row${row+1}-col${col+1}`;
        td.textContent = td.dataset.cell;
        tr.append(td);
    }

    table.append(tr);
}

table.addEventListener("click", (e) => {
    for (const elem of table.querySelectorAll("*")) {
        elem.classList.remove("highlight")
    }
    if (e.target.tagName === "TD") {
        e.target.classList.add("highlight");
    }
})

document.querySelector("[data-table]").append(table);

// ------------------ numpad ------------------

const numpad = document.querySelector("[data-numpad]");

document.addEventListener("keypress", (e) => {
    for (const button of numpad.querySelectorAll("td")) {
        button.classList.remove("highlight");
        if (button.textContent === e.key) {
            button.classList.add("highlight");
        }
    };
})

document.addEventListener("keyup", () => {
    for (const button of numpad.querySelectorAll("td")) {
        button.classList.remove("highlight");
    };
})