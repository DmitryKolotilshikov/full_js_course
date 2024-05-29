# Задачи (логическое присваивание)

**1 задача:**

Что выведет код ?

```JavaScript
    let value = NaN;

    value &&= 10;
    value ||= 20;
    value &&= 30;
    value ||= 40;

    console.log(value);
```

<details>
    <summary>Ответ: </summary>

```
Ответ: 30;

value &&= 10; // NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // 30
```
</details>

<hr/>

**2 задача:**

Что выведет код ?

```JavaScript
    let city = null;

    city ??= "Берлин";
    city ??= null;
    city ??= "Кёльн";
    city ??= "Гамбург";

    console.log(city);
```

<details>
    <summary>Ответ: </summary>

```
Ответ: Берлин;

city ??= "Берлин"; // Берлин
city ??= null; // Берлин
city ??= "Кёльн"; // Берлин
city ??= "Гамбург"; // Берлин
```
</details>

<hr/>

**3 задача:**

Что выведет код ?

```JavaScript
    console.log(undefined ?? NaN ?? null ?? "" ?? " ");
```

<details>
    <summary>Ответ: </summary>

```
Ответ: NaN. Это первое «определённое» значение.
```
</details>