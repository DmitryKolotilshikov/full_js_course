# Задачи (логические операторы)

**1 задача:**

Что выведет код ?

```JavaScript
    console.log(null || 0 || 1 || undefined);
```

<details>
    <summary>Ответ: </summary>

```
Выведится 1. Так как null, 0, undefined falsy значения
```
</details>

<hr/>

**2 задача:**

Что выведет код ?

```JavaScript
    console.log(5 && null && 10);
```

<details>
    <summary>Ответ: </summary>

```
Выведится null. Потому что это первое «ложное» значение из списка
```
</details>

<hr/>

**3 задача:**

Что выведет код ?

```JavaScript
    console.log(null || 2 && 3 || 4);
```

<details>
    <summary>Ответ: </summary>

```
Выведится 3. 
Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

Результат 2 && 3 = 3, поэтому выражение приобретает вид (null || 3 || 4)
```
</details>

<hr/>

**4 задача:**

Что выведет код ?

```JavaScript
    if (-1 || 0) console.log( 'один' );
    if (-1 && 0) console.log( 'два' );
    if (null || -1 && 1) console.log( 'три' );
```

<details>
    <summary>Ответ: </summary>

```
Выполнится 'один' и 'три'

(-1 || 0) // -1 (true)
(-1 && 0) // 0 (false)
(null || -1 && 1) // 1 (true)
```
</details>