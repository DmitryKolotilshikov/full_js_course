// Strings (строки)

const log = console.log;

let str = "Hello \nWorld!";
str = "Hello \"man\"";
str = '👍';
str = String.fromCodePoint(128077);

// str = "\u+1F44D"; // error
str = "\u{1F44D}";

const copyRight = "\u00A9";

// log(copyRight)

/* 
Фигурные скобки для Unicode-символов выше U+FFFF: Unicode-символы выше U+FFFF (которые требуют более 4 шестнадцатеричных цифр) должны заключаться в фигурные скобки ({}) при использовании escape-последовательности \u.

Некорректный синтаксис: Синтаксис \u+1F44D неверен, потому что + не является частью синтаксиса escape-последовательностей в JavaScript. */

// ------------------------------------

// const filePath = String.raw`C:\Development\profile\aboutme.html`;
// log(`The file was uploaded from: ${filePath}`);

// ------------------------------------
const firstName = "Anna";

str = `Hello ${firstName}`;

str = `User:
 - Alex
 - Nik
 - Julia
 - Margarita
`;

// Ошбика с ""
// str = "User:
//  - Alex
//  - Nik
//  - Julia
//  - Margarita
// ";

// log(str);
// ---------------------------------------

let text = "World";

// log(text.length);
// log(text.toUpperCase());
// log(text.toLowerCase());
// log(text.repeat(3))

// log(text[0]);
// log(text[1]);
// log(text[4]);

// log(text.at(3));
// log(text.at(-1));
// log(text.at(-2));

let me = "I am " + text.at(1) + text.at(3) + text.at(4);

me = `I am ${text.at(1)}${text.at(3)}${text.at(4)}`;

// log(str);

// ------------------------------

str = "      JavaScript is awesome      ";
// str = str.trimStart();
// str = str.trimEnd();
// str = str.trim();

// log(str);
// log(str.replace("Script", ""));
// log(str.replace("Java", "HTML"));
// log(str.indexOf("S"));
// log(str.indexOf("Script"));
// log(str.indexOf("Java"));
// log(str.indexOf("W")); // -1 значит не найдено

str = "JavaScript is awesome";

if (str.indexOf("Java")) { // вернет 0, а 0 -это falsy значение
    console.log("проверка пройдена");
}
if (str.indexOf("Java") !== -1) { // 0 !== -1 это true
    console.log("проверка пройдена");
}

// ----------------------------------

// log(str);
// log(str.includes("is"));
// log(str.startsWith("Java"));
// log(str.startsWith("is"));
// log(str.endsWith("some"));
// log(str.endsWith("is"));

// ----------------------------------
// substring, slice, substr

// substring(start, end)
// slice(start, end)
// substr(start, length)

str = "hardcore";

// log(str.substring(0, 4)) // "hard"
// log(str.substring(4)) // "core"
// log(str.substring(8, 4)) // "core", если start больше end, то substring меняет их местами

// log(str.slice(0, 4)); // "hard"
// log(str.slice(8, 4)); // ""

// log(str.substr(1,3))  // deprecated - устарело

// ----------------------------------

let random = "abc";

// log(random.padStart("10", 0));
// log(random.padEnd("10", 0));
// log(random.padEnd("13", Math.random()));