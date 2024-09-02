# Задачи (Циклы, for, while, bubble sort)

**1 задача:**

Создайте массив с числами. Напишите цикл `for`, который вычисляет сумму всех чисел в массиве и выводит результат в консоль.

```JavaScript
   const numbers = [1, 2, 3, 4, 5];
```

<hr/>

**2 задача:**

Напишите цикл `while`, который выводит все элементы массива в обратном порядке.

```JavaScript
    const fruits = ['apple', 'banana', 'cherry', 'date'];
```

<hr/>

**3 задача:**

Создайте массив с числами. Напишите цикл `for`, который подсчитывает количество четных чисел в массиве и выводит результат в консоль.

```JavaScript
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

<hr/>

**4 задача:**

У вас есть массив объектов, где каждый объект представляет собой товар с полями `name` и `price`. Напишите цикл `for`, который выводит только те товары, цена которых больше 100.

```JavaScript
    const products = [
        { name: 'Laptop', price: 1500 },
        { name: 'Mouse', price: 25 },
        { name: 'Keyboard', price: 75 },
        { name: 'Monitor', price: 200 },
    ];
```

<hr/>

**5 задача:**

Напишите цикл `while`, который ищет элемент в массиве и выводит его индекс, если он найден. Если элемент не найден, выведите сообщение "Элемент не найден".

```JavaScript
    const colors = ['red', 'green', 'blue', 'yellow'];
    const targetColor = 'blue';
```

<hr/>

**6 задача:**

Напишите цикл `for`, который находит максимальное значение в массиве чисел и выводит его в консоль.

```JavaScript
    const numbers = [3, 5, 7, 2, 8, 10, 6];
```

<hr/>

**7 задача:**

Дан массив `array`. Выполните пузырьковую сортировку массива по возрастанию и по убыванию с помощью циклов `for`.

```JavaScript
    const array = [4, 33, 2, 1];
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
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 15

```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
const fruits = ['apple', 'banana', 'cherry', 'date'];
let i = fruits.length - 1;

while (i >= 0) {
  console.log(fruits[i]);
  i--;
}
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}

console.log(evenCount); // 5
```
</details>

<details>
    <summary>Решение - Задача 4: </summary>

```
const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 100) {
    console.log(products[i].name);
  }
}
```
</details>

<details>
    <summary>Решение - Задача 5: </summary>

```
const colors = ['red', 'green', 'blue', 'yellow'];
const targetColor = 'blue';

let i = 0;
let found = false;

while (i < colors.length) {
  if (colors[i] === targetColor) {
    console.log(i);
    found = true;
    break;
  }
  i++;
}

if (!found) {
  console.log('Элемент не найден');
}
```
</details>

<details>
    <summary>Решение - Задача 6: </summary>

```
const numbers = [3, 5, 7, 2, 8, 10, 6];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // 10
```
</details>

<details>
    <summary>Решение - Задача 7: </summary>

```
  Решение смотрите в 21 уроке и в PDF к данному уроку
```
</details>