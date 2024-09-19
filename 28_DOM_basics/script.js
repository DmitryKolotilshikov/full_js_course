// // DOM - basics, navigation
/* 
DOM позволяет нам делать что угодно с элементами и их содержимым, 
но для начала нужно получить соответствующий DOM-объект.

Все операции с DOM начинаются с объекта document. Это главная «точка входа» в DOM. 
Из него мы можем получить доступ к любому узлу.
*/
const log = console.log;
const dir = console.dir;

dir(document.documentElement) // <html>
dir(document.head) // <head>
dir(document.body) // <body>

// dir(document);
// dir(document.children[0].children);
// dir(document.body.children);
// dir(document.body.children[0]);
log(document.body.childElementCount);

// dir(document.body.childNodes);

// NodeList - text, HTMLELements...
// HTMLCollection - only HTMLElements

for (const child of document.body.children) {
    if (child.tagName !== "SCRIPT") {
        // dir(child);
        // log("child: ", child);
    }
}

const body = document.body;

dir(body.firstChild);
dir(body.firstElementChild);
dir(body.lastChild);
dir(body.lastElementChild);

body.firstElementChild.style.color = "green";

log(body.parentElement); // возвращает только элемент или null (если элемента нету)
log(body.parentNode); // возвращает узел
log(body.parentElement.parentElement);
log(body.parentNode.parentNode);

const h2 = document.body.children[1];

log(h2);
log(h2.previousElementSibling); // родственник выше (слева)
log(h2.nextElementSibling); // родственник ниже (справа)
log(h2.textContent);

h2.textContent += " awesome";
