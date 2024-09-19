// Window, DOM, BOM, Browser API
// Про то, что такое API рассказывал тут https://youtu.be/_rgP5r08EXs

const log = console.log;

/* 
Объект window поддерживается всеми браузерами. Он представляет собой окно браузера.

Все глобальные объекты, функции и переменные JavaScript автоматически становятся членами объекта window.

Глобальные переменные - это свойства объекта window.
Глобальные функции - это методы объекта window.
*/

// ---- Browser API -----
// --- BOM (browser object model) ----
// Объектная модель браузера (BOM) позволяет JavaScript "общаться" с браузером.
 
log(window);
log(window.innerHeight);
log(window.innerWidth);

// window.open() // открыть новое окно
// window.open("https://ya.ru", "_blank") // открыть новое окно в новой вкладке
// window.open("https://ya.ru", "_self") // открыть новое окно в этой же вкладке
// window.close() // закрыть текущее окно

// Объект window.screen содержит информацию об экране пользователя.
// window.screen может быть записан без префикса window.

log(screen.width);
log(screen.height);
log(screen.pixelDepth);

// Объект window.location можно использовать для получения адреса текущей страницы (URL)
// и для перенаправления браузера на новую страницу.

log(location.href); // возвращает href (URL) текущей страницы
log(location.hostname); // возвращает доменное имя веб хостинга
log(location.pathname); // возвращает путь и имя файла текущей страницы
log(location.protocol); // возвращает используемый веб протокол (http: или https:)

// Объект window.navigator содержит информацию о браузере посетителя.

log(navigator);
log(navigator.userAgent);
log(navigator.userAgentData);
log(navigator.geolocation);
log(navigator.language);

/* 
Предупреждение !!!
Информация из объекта навигатора часто может вводить в заблуждение, 
и ее не следует использовать для определения версий браузера, потому что:

В разных браузерах можно использовать одно и то же имя
Данные навигатора могут быть изменены владельцем браузера.
Некоторые браузеры неправильно идентифицируют себя, чтобы обойти тесты сайта
Браузеры не могут сообщать о новых операционных системах, выпущенных позже, чем браузер.
*/

// Объект window.history содержит историю браузеров.

log(history);
// history.back(); // то же, что и возврат в браузере
// history.forward(); // то же самое, что и щелчок вперед в браузере

// --- alerts ----

// window.alert("Hello, I am a part of window object");


// -------- DOM (Document Object Model) ----------
// DOM - это представление всей страницы как объекта.
// Объект document – основная «входная точка». 
// С его помощью мы можем что-то создавать или менять на странице.

// log(window.document);
log(document)
console.dir(document);
console.dir(document.body);
console.dir(document.head);

document.body.style.background = "lightsalmon";

// --------------------- JavaScript ----------------------
// log(window.Array.prototype);
// log(window.Object.prototype);
// log(Array.prototype);