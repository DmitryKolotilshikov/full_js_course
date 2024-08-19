# Задачи (дата и время)

**1 задача:**

Создайте объект Date для даты: 13 сентября 2028 года, 13 часов 23 минуты. 

```JavaScript
    const d = ??;

    console.log(d); // Thu Jan 13 2028 13:23:00
```

<hr/>

**2 задача:**

Отобразите числом сколько лет прошло на сегодняшний день исходя из полученного таймстампа (количества миллисекунд прошедших с 1 января 1970 года) на день решения данной задачи

```JavaScript
    const years = ??;

    console.log(years); // 54 в 2024 году
```

<hr/>

**3 задача:**

Выведите сегодняшнюю дату в соответствии с локалью `en-US` и `ru-RU`

```JavaScript
    const d = new Date();
    const todayEN = ??;
    const todayRU = ??;

    console.log(todayEN); // Wednesday, August 14, 2024 at 8:34 PM
    console.log(todayRU); // среда, 14 августа 2024 г. в 20:34
```

<hr/>

**4 задача:**

Сколько минут осталось до завтра?

```JavaScript
    const now = new Date();
    const tomorrow = ??;
    const minutesBeforeTomorrow = ??;

    console.log(minutesBeforeTomorrow); // ??
```

<hr/>

**5 задача:**

Определите последние число февраля месяца 2024 года

```JavaScript
    const lastNumberOfMonth = ??;

    console.log(lastNumberOfMonth); // 29
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

**Решения:**

<details>
    <summary>Решение - Задача 1: </summary>

```
const d = new Date(2028, 0, 13, 13, 23);
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
const years = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365);
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
const d = new Date();
const todayEN = d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Minsk",
  });
const todayRU = d.toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Minsk",
  });
```
</details>

<details>
    <summary>Решение - Задача 4: </summary>

```
const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

const diff = tomorrow - now;
const minutesBeforeTomorrow = Math.round(diff / 1000 / 60);
```
</details>

<details>
    <summary>Решение - Задача 5: </summary>

```
const lastNumberOfMonth = new Date(2024, 2, 0);
```
</details>