# Задачи (JSON, local storage)

**1 задача:**

Преобразуйте `car` в JSON, затем распарсите JSON в переменную `newCar`.
При парсинге найдите поле `year` и восстановите объект даты
 
```JavaScript
   const car = {
    year: new Date(2024, 3, 1),
    brand: "audi",
    color: "blue",
    power: 3.2,
    isFast: true,
  }
```

<hr/>

**2 задача:**

Создайте 3 функции. 
- Первая функция добавляет переданный элемент в `localStorage` по ключу и имеет 2 параметра - 1й параметр ключ, 2й - значение.
- Вторая функция удаляет элемент из `localStorage` по переданному ключу.
- Третья получает элемент из `localStorage` по переданному ключу.

и потренеруйтесь с массивом `clients` использовать данные функции

```JavaScript
  const setItemToLocalStorage = ...
  const removeItemFromLocalStorage = ...
  const getItemFromLocalStorage = ...

  const clients = [
    {id: 1, level: 3, name: "Lucy", status: "online"},
    {id: 2, level: 1, name: "Rick", status: "offline"},
    {id: 3, level: 3, name: "Jack", status: "online"},
    {id: 4, level: 2, name: "Helen", status: "online"},
    {id: 5, level: 1, name: "Alice", status: "offline"},
    {id: 6, level: 1, name: "Derek", status: "offline"},
    {id: 7, level: 3, name: "Megan", status: "online"},
  ];
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
   const car = {
    year: new Date(2024, 3, 1),
    brand: "audi",
    color: "blue",
    power: 3.2,
    isFast: true,
  }

  const carJSON = JSON.stringify(car);
  const newCar = JSON.parse(carJSON, (key, value) => {
        if (key === "year") {
            return new Date(value);
        }
        return value;
    });
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
  const clients = [
    {id: 1, level: 3, name: "Lucy", status: "online"},
    {id: 2, level: 1, name: "Rick", status: "offline"},
    {id: 3, level: 3, name: "Jack", status: "online"},
    {id: 4, level: 2, name: "Helen", status: "online"},
    {id: 5, level: 1, name: "Alice", status: "offline"},
    {id: 6, level: 1, name: "Derek", status: "offline"},
    {id: 7, level: 3, name: "Megan", status: "online"},
  ];

 const setItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
 }

  const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
 }

  const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
 }
```
</details>
