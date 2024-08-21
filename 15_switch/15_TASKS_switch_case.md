# Задачи (switch конструкция)

**1 задача:**

Перепишите код с использованием одной конструкции `switch`:

```JavaScript
    const number = Number(prompt('Введите число между 0 и 3', ''));

    if (number === 0) {
     console.log('Вы ввели число 0');
    }

    if (number === 1) {
     console.log('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
     console.log('Вы ввели число 2, а может и 3');
    }
```

<hr/>

**2 задача:**

Напишите `switch`, который принимает на вход день недели (число от 0 до 6) и выводит название соответствующего дня. Если введено число, которое не соответствует ни одному дню недели, программа должна вывести сообщение `Некорректный ввод`.

```JavaScript
    const day = new Date().getDay();
```

<hr/>

**3 задача:**

Напишите `switch`, который принимает на вход возраст человека и выводит сообщение о жизненном этапе: "Ребёнок" (0-12 лет), "Подросток" (13-17 лет), "Взрослый" (18-64 года), или "Пожилой человек" (65 лет и старше). Если введено число меньше 0, программа должна вывести сообщение `Некорректный ввод`.

```JavaScript
    const age = 13;
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
const number = Number(prompt('Введите число между 0 и 3', ''));

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        console.log('Ничего не подходит');
}
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
switch (day) {
    case 0:
        console.log("Воскресенье");
        break;
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    default:
        console.log("Некорректный ввод");
        break;
    }
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
switch (true) {
    case (age >= 0 && age <= 12):
        console.log("Ребёнок");
        break;
    case (age >= 13 && age <= 17):
        console.log("Подросток");
        break;
    case (age >= 18 && age <= 64):
        console.log("Взрослый");
        break;
    case (age >= 65):
        console.log("Пожилой человек");
        break;
    default:
        console.log("Некорректный ввод");
        break;
}
```
</details>
