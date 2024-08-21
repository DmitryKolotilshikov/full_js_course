# Задачи (functions base)

**1 задача:**

Напишите функцию которая возвращает случайное от 1 до 100 число:

```JavaScript
    function getRandomValue() {}

    console.log(getRandomValue())
```

<hr/>

**2 задача:**

Напишите функцию которая возвращает случайное наибольшее число и переданных в нее чисел:

```JavaScript
    function getMaxValue(num1, num2, num3, num4, num5) {}

    console.log(getMaxValue(2, 5, 99, 23, 101))
```

<hr/>

**3 задача:**

Напишите функцию которая возвращает строку с текстом какой сегодня день недели:

```JavaScript
    function getCurrentDayOfWeek(currentDate) {}

    console.log(getCurrentDayOfWeek(new Date()))
```

<hr/>


<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>

**Решения:**

<details>
    <summary>Решение - Задача 1: </summary>

```
function getRandomValue() {
    return Math.ceil(Math.random() * 100);
}
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
function getMaxValue(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
}
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
function getCurrentDayOfWeek(currentDate) {
    const day = currentDate.getDay();

    switch (day) {
        case 0:
            return "Воскресенье"; // если используется return, то break не нужен
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        default:
            return "Некорректный ввод";
        }
}
```
</details>
