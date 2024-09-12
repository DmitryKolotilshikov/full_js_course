# Задачи (Объекты, методы, for in, destructing)

**1 задача:**

Сделайте деструктурирующие присваивание, которое:

- свойства `years` присвоить в переменную `age`.
- свойства `name` присвоить в переменную `name`.
- свойства `isDeveloper` присвоить в переменную `isDeveloper` (false - если такое сво-во отсутствует).
 
```JavaScript
   const user = {
    years: 33,
    name: "Alex",
  };
```

<hr/>

**2 задача:**

Посчитайте максимальную зарплату у всех сотрудников из объекта `employees`

```JavaScript
  const employees = {
    alex: 1000,
    elena: 500,
    olga: 800,
    nicolas: 1300,
    anton: 2400,
    oleg: 3000,
    kate: 5000
  }
```

<hr/>

**3 задача:**

Создайте объект `newCar` в который деструктурируйте объект `oldCar` и замените значения в свойстваx
`model` на `escape 4` и `year` на `2023`

```JavaScript
   const oldCar = {
    year: 2015,
    name: "Ford",
    model: "escape 3",
    "engine capacity": 1.5,
   }

   const newCar = {}
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
  const user = {
    years: 33,
    name: "Alex",
  };

  const { years: age, name, isDeveloper = false } = user;
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
  const employees = {
    alex: 1000,
    elena: 1300,
    olga: 700,
    nicolas: 1800,
    anton: 3000,
    oleg: 4000,
    kate: 5000
  }

  let sum = 0;

  // for (const value of Object.values(employees)) {
  //  sum += value;
  // }

  for (const key in employees) {
    sum += employees[key];
  }

  console.log(sum) // 16800
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
  const oldCar = {
    year: 2015,
    name: "Ford",
    model: "escape 3",
    "engine capacity": 1.5,
   }

   const newCar = {
    ...oldCar,
    year: 2023,
    model: "escape 4"
   }
```
</details>