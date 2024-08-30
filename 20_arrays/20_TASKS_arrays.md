# Задачи (Arrays - массивы)

**1 задача:**

У вас есть массив `fruits`, который содержит названия различных фруктов. Выведите в консоль первый и последний элемент массива.

```JavaScript
   const fruits = ["Apple", "Banana", "Orange", "Grape"];
```

<hr/>

**2 задача:**

У вас есть массив `colors`, который содержит названия нескольких цветов. Добавьте в конец массива новый цвет и удалите первый элемент массива. Выведите обновленный массив в консоль.

```JavaScript
    const colors = ["Red", "Green", "Blue"];
```

<hr/>

**3 задача:**

Создайте массив объектов `statuses` (см пример ниже). Каждому элементу массива (т.е объекту) присвойте новое поле `message` со следующими значениями:

- для status `Active`, message = "Активен";
- для status `Pending`, message = "Ожидается ответ";
- для status `Decline`, message = "Отказано";

Далее добавьте в конец массива новый объект `{
    id: 4,
    status: "Complete",
    message: "Завершено"
}`

```JavaScript
    const statuses = [
        {id: 1, status: "Active" },
        {id: 2, status: "Pending" },
        {id: 3, status: "Decline" },
    ];
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
const fruits = ["Apple", "Banana", "Orange", "Grape"];

console.log(fruits[0]); // Apple
console.log(fruits[3]); // Grape

```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
const colors = ["Red", "Green", "Blue"];

colors.push("Yellow");
colors.shift();

console.log(colors); // ["Green", "Blue", "Yellow"]

```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
 const statuses = [
        {id: 1, status: "Active" },
        {id: 2, status: "Pending" },
        {id: 3, status: "Decline" },
 ];

statuses[0].message = "Активен";
statuses[1].message = "Ожидается ответ";
statuses[2].message = "Отказано";

statuses.push({
    id: 4,
    status: "Complete",
    message: "Завершено"
})

console.log(statuses)
```
</details>