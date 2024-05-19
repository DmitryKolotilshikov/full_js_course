// Grouping console
console.group("Группа логгов");
console.log("1");
console.log("2");
console.log("3");
console.groupEnd();

// Console error and warning
console.error("Ошибка - Срочно сделайте что-нить!");
console.warn("Предупреждение - Будьте осторожнее!");

// Console table
console.table({ name: "Dmitry Ko", age: 33 });

// Add styles
const styles = "background-color: lightseagreen; color: black; padding: 20px;";
// console.log("%cStart coding, now!", "background-color: lightseagreen; color: black; padding: 20px;");
console.log("%cStart coding, now!", styles);

/* 
Горячие клавиши (VSCode)

MacOS:
Command + / (Однострочный комментарий)
Shift + Option + A   (Многострочный комментарий)

Windows:
Ctrl + / (Однострочный комментарий)
Shift + Alt + A (Многострочный комментарий)
*/
