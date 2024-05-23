# Задачи (условные ветвления)

**1 задача:**

Выведется ли в консоль ?

```JavaScript
if ('0') {
    console.log('какой то текст');
}
```

<details>
    <summary>Ответ: </summary>

```
Любая строка, кроме пустой это truthy, значит ответ ДА, выведится
```
</details>

<hr/>

**2 задача:**

Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в консоль?

(предполагается ввод в prompt только чисел)

```JavaScript
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
```

<details>
    <summary>Решение: </summary>

```JavaScript
const res = prompt('Введите число', 0);

if (res > 0) {
    console.log(1);
} else if (res < 0) {
    console.log(-1);
} else {
    console.log(0);
}
```
</details>

<hr/>

**3 задача:**

Перепишите задачу 2 с использование тернарного оператора (?)

<details>
    <summary>Решение: </summary>

```JavaScript
const res = prompt('Введите число', 0);

const check = res > 0 ? 1 : res < 0 ? -1 : 0;

console.log(check);
```
</details>