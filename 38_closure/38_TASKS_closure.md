# Задачи (closure - замыкание)

**1 задача:**

Напиши функцию `createCounter`, которая принимает начальное значение `start` и возвращает функцию. 
При каждом вызове этой функции возвращается текущее значение счётчика, увеличенное на 1.
 
```JavaScript
  const counter = createCounter(5);

  console.log(counter()); // 6
  console.log(counter()); // 7
  console.log(counter()); // 8
```

<hr/>

**2 задача:**

Склад товаров
Создай функцию `createStore`, которая принимает строку `item` и возвращает объект с двумя методами:

 - add: добавляет единицу товара на склад.
 - getCount: возвращает текущее количество товара на складе.
 
```JavaScript
  const store = createStore('Apples');

  store.add();
  store.add();
  console.log(store.getCount()); // 2
  store.add();
  console.log(store.getCount()); // 3
```

<hr/>

**3 задача:**

Калькулятор с памятью
Создай функцию `createCalculator`, которая возвращает объект с четырьмя методами:

 - add(value): добавляет value к текущему значению.
 - subtract(value): вычитает value из текущего значения.
 - multiply(value): умножает текущее значение на value.
 - getValue(): возвращает текущее значение.

При создании калькулятора его значение должно быть равно 0.

```JavaScript
  const calculator = createCalculator();

  calculator.add(10);
  console.log(calculator.getValue()); // 10

  calculator.subtract(3);
  console.log(calculator.getValue()); // 7

  calculator.multiply(2);
  console.log(calculator.getValue()); // 14
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
  const createCounter = (start) => {
    let count = start; // Инициализация счётчика начальным значением

    return () => {
        count += 1; // Увеличиваем значение на 1 при каждом вызове
        return count;
    };
  }

  const counter = createCounter(5);

  console.log(counter()); // 6
  console.log(counter()); // 7
  console.log(counter()); // 8
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
   const createStore = (item) => {
    let count = 0; // Начальное количество товара

      return {
          add: () => {
              count += 1; // Увеличиваем количество товара на складе
          },
          getCount: () => {
              return count; // Возвращаем текущее количество товара
          }
      };
    }

    const store = createStore('Apples');

    store.add();
    store.add();
    console.log(store.getCount()); // 2
    store.add();
    console.log(store.getCount()); // 3
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
  function createCalculator() {
      let value = 0; // Начальное значение калькулятора

      return {
          add: (num) => {
              value += num; // Добавляем число к текущему значению
          },
          subtract: (num) => {
              value -= num; // Вычитаем число из текущего значения
          },
          multiply: (num) => {
              value *= num; // Умножаем текущее значение на число
          },
          getValue: () => {
              return value; // Возвращаем текущее значение
          }
      };
  }

  const calculator = createCalculator();

  calculator.add(10);
  console.log(calculator.getValue()); // 10

  calculator.subtract(3);
  console.log(calculator.getValue()); // 7

  calculator.multiply(2);
  console.log(calculator.getValue()); // 14
```
</details>
