# Задачи (operators)

**1 задача:**

Чему будут равны переменные `a`, `b`, `c` и `d` ?

```JavaScript
let a = 10, b = 10;

const c = ++a; // ?
const d = b++; // ?
```

<details>
    <summary>Решение: </summary>

```JavaScript
a = 11;
b = 11;
c = 11;
d = 10;
```
</details>

<hr/>

**2 задача:**

Чему будут равны переменные `a` и `x`?

```JavaScript
let a = 5;

const x = 1 + (a *= 3); // ?
```

<details>
    <summary>Решение: </summary>

```JavaScript
a = 15;
x = 16;
```
</details>