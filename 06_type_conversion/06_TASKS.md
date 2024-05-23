# Задачи (преобразования типов)

**1 вопрос:**

Какие есть способы для перевода числа в строку ?

<details>
    <summary>Ответ: </summary>

```JavaScript
value = value + '';
value = `${value}`;
value = value.toString();
value = String(value);
```
</details>

<hr/>

**2 вопрос:**

Какие есть способы для перевода строку в число ?

<details>
    <summary>Ответ: </summary>

```JavaScript
value = Number(value);
value = +value;
value = parseInt(value);
value = parseFloat(value);
```
</details>

<hr/>

**1 задача:**

Какой будет результат ?

```JavaScript
let val;
val = 5 + '5'; // ??
val = 2 * '2'; // ??
val = 20 / '10'; // ??
val = true + true; // ??
val = false + true; // ??
```

<details>
    <summary>Решение: </summary>

```JavaScript
val = 5 + '5'; // '55' string
val = 2 * '2'; // 4 number
val = 20 / '10'; // 2 number
val = true + true; // 2
val = false + true; // 1
```
</details>

<hr/>

**2 задача:**

Какой будет результат ?

```JavaScript
let res;
res = true === true; // ??
res = 1 == true; // ??
res = undefined == null; // ??
res = null === undefined; // ??
res = "true" === "false"; // ??
res = "" == false; // ??
res = "" == 0; // ??
```

<details>
    <summary>Решение: </summary>

```JavaScript
res = true === true; // true
res = 1 == true; // true
res = undefined == null; // true
res = null === undefined; // false
res = "true" === "false" // false
res = "" == false; // true
res = "" == 0; // true
```
</details>