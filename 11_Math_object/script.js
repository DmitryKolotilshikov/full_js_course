// Math object

let x;

// Возвращает минимальное число из переданных
x = Math.min(4, 7, 2, 13); // 2

// Возвращает максимальное число из переданных
x = Math.max(4, 7, 2, 13); // 13

// -------- Округления --------
// округляет к большему
x = Math.ceil(5.3); // 6

// округляет к меньшему
x = Math.floor(5.3); // 5

// возвращает число, округлённое к ближайшему целому
x = Math.round(5.3); // 5
x = Math.round(5.6); // 6

// ----------------------------
// возводит в степень
x = Math.pow(3, 2); // 9
x = Math.pow(3, 3); // 27
x = Math.pow(3, 4); // 81

// возвращает квадратный корень числа
x = Math.sqrt(81); // 9

// возвращает абсолютное значение
x = Math.abs(-48); // 48


// -------- Случайные (рандомные) значения --------
// генерирует рандомное значение от 0 до 1
x = Math.random();

// генерирует рандомное значение от 1 до 50
x = Math.floor(Math.random() * 50 + 1);
// генерирует рандомное значение от 1 до 100
x = Math.floor(Math.random() * 100 + 1);

console.log(x);
