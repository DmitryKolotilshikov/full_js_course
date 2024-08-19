# Задачи (строки)

**1 задача:**

Преобразуйте первую букву строки `str` в верхний регистр, чтобы получилось `Javascript`

```JavaScript
    let str = "javascript";

    console.log(str); // "Javascript"
```

<hr/>

**2 задача:**

Преобразуйте букву `J` и `S` строки `str` в верхний регистр, чтобы получилось `JavaScript`

```JavaScript
    let str = "javascript";

    console.log(str); // "JavaScript"
```

<hr/>

**3 задача:**

Напишите простейшую проверку комментариев на стоп слово `fuck` и присвойте результат в `boolean` формате в переменную `isBlockedComment`

```JavaScript
    const comment1 = "Hello man! Fuck you!";
    const comment2 = "Hello man! thank you!";
    const comment3 = "Hello man! thank you, fuck!";

    let isBlockedComment1;
    let isBlockedComment2;
    let isBlockedComment3;

    console.log(isBlockedComment1); // true or false
    console.log(isBlockedComment2); // true or false
    console.log(isBlockedComment3); // true or false
```

<hr/>

**4 задача:**

Удалите символы `$#@&` из строки ` $#$  Hello @$&#World! `

```JavaScript
    let str = " $#$  Hello @$&#World! ";

    console.log(str); // "Hello World"
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
// 1 решение
str = str.at(0).toUpperCase() + str.substring(1);

// 2 решение
str = str[0].toUpperCase() + str.substring(1);

// 3 решение
str = `${str.at(0).toUpperCase()}${str.slice(1)}`;

// 4 решение
str = str.replace("j", "J");
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
// 1 решение
str = str.at(0).toUpperCase() + str.substring(1, 4) + str.at(4).toUpperCase() + str.substring(5);

// 2 решение
str = str.replace("j", "J").replace("s", "S");

// 3 решение
str = str.split("");
str[0] = str[0].toUpperCase();
str[4] = str[4].toUpperCase();
str = str.join("");
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
// 1 решение
isBlockedComment1 = comment1.toLowerCase().includes("fuck");
isBlockedComment2 = comment2.toLowerCase().includes("fuck");
isBlockedComment3 = comment3.toLowerCase().includes("fuck");

// 2 решение
isBlockedComment1 = comment1.toLowerCase().indexOf("fuck") !== -1;
isBlockedComment2 = comment2.toLowerCase().indexOf("fuck") !== -1;
isBlockedComment3 = comment3.toLowerCase().indexOf("fuck") !== -1;
```
</details>

<details>
    <summary>Решение - Задача 4: </summary>

```
// 1 решение
str = str.replaceAll("$", "").replaceAll("#", "").replaceAll("@", "").replaceAll("&", "").trim();

// 2 решение (простое регулярное выражение внутри replace - продвинутая тема, которая будет далее разбираться по курсу)
str = str.replace(/[$#@&]/g, "").trim();
```
</details>