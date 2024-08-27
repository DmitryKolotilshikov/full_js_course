# Задачи (functions scope)

**1 задача:**

Напишите функцию `greet`, которая принимает два параметра: `name (имя)` и `greeting (приветствие)`. Если параметр `greeting` не передан, функция должна использовать значение по умолчанию "Hello". Функция должна возвращать строку приветствия.

```JavaScript
    console.log(greet("Alice")); // Вывод: "Hello, Alice!"
    console.log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"
```

<hr/>

**2 задача:**

Напишите две функции для умножения чисел. Первая функция должна быть объявлена как `функциональное выражение`, а вторая как `декларация функции`. Обе функции должны принимать два числа и возвращать их произведение.

```JavaScript
    console.log(multiplyExpression(2, 3)); // Вывод: 6
    console.log(multiplyDeclaration(4, 5)); // Вывод: 20
```

<hr/>

**3 задача:**

Напишите функцию `outerFunction`, внутри которой объявите переменную `innerVar` и функцию `innerFunction`, которая выводит значение переменной `innerVar`. Вызовите `innerFunction` внутри `outerFunction`, а затем попробуйте вывести значение `innerVar` за пределами `outerFunction`. Объясните, что произошло и почему.

```JavaScript
    outerFunction(); // Вывод: "I am inside!"

    console.log(innerVar); // Что будет выведено?
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
    function greet(name, greet = "Hello") {
        return `${greet}, ${name}!`;
    }
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
    const multiplyExpression = function(a, b) {
        return a * b;
    };

    function multiplyDeclaration(a, b) {
        return a * b;
    }
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
function outerFunction() {
    const innerVar = "I am inside!";
    
    function innerFunction() {
        console.log(innerVar);
    }
    
    innerFunction();
}
```
</details>
