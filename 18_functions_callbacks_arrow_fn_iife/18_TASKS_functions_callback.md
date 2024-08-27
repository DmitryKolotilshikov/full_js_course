# Задачи (functions callback)

**1 задача:**

Напишите функцию `greet`, которая принимает строку `name` и `функцию-коллбэк callback`. Функция должна возвращать результат вызова коллбэка с именем.

```JavaScript
    console.log(greet("Ekaterina", sayHello)); // "Hello, Ekaterina!"
```

<hr/>

**2 задача:**

Напишите функцию `double`, которая принимает число `num` и `функцию-коллбэк callback`. Функция должна возвращать результат вызова коллбэка с удвоенным значением числа.

Использовать `arrow functions`.

```JavaScript
    console.log(double(5, displayResult)); // "Result is 10"
```

<hr/>

**3 задача:**

Напишите функцию `processString`, которая принимает строку `str` и `функцию-коллбэк callback`. Функция должна возвращать результат вызова коллбэка с преобразованной строкой.

Использовать `arrow functions`.

```JavaScript
    console.log(processString("hello", makeUpperCase)); // "HELLO"
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
    function greet(name, callback) {
        return callback(name);
    }

    function sayHello(name) {
        return `Hello, ${name}!`;
    }
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
    const double = (num, callback) => {
        return callback(num * 2);
    }

    const displayResult = (result) => {
        return `Result is ${result}`;
    }
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
    const processString = (str, callback) => callback(str);

    const makeUpperCase = str => str.toUpperCase();
```
</details>