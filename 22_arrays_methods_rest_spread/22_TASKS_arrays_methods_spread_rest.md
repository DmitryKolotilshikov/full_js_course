# Задачи (Массивы, методы, деструктуризация, spread, rest)

**1 задача:**

Напишите цикл for of для вывода всех элементов массива `users`.

```JavaScript
   const users = [
    { id: 1, name: "Alex", age: 35, position: "manager" },
    { id: 2, name: "Kate", age: 22, position: "qa" },
    { id: 3, name: "Nikita", age: 29, position: "developer" },
  ];
```

<hr/>

**2 задача:**

Отсортируйте массив `numbers` и затем его разверните.

```JavaScript
    const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];
```

<hr/>

**3 задача:**

Напишите функцию которая преобразует массив `cars` в строку используя переданный сепаратор как аргумент функции.

```JavaScript
   const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
   const newCars = transformIntoString("--");

   console.log(newCars); // audi--ford--mercedes--mazda--teslas
```

<hr/>

**4 задача:**

Напишите функцию `addNewCar` которая проверяет есть ли в массиве `cars` переданный авто как аргумент и если нет,
то добавляет новое авто в массив `cars`.

```JavaScript
    const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
```

<hr/>

**5 задача:**

Напишите функцию `calcSum` которая принимает неограниченное количество целочисленных аргументов и возвращает их сумму;

```JavaScript
    console.log(calcSum(1)); // 1
    console.log(calcSum(1, 2, 3, 4, 5)); // 15
    console.log(calcSum(1, 2, 3)); // 6
    console.log(calcSum(1, 2, 3, 100, 200, 500, 0)); // 806
```

<hr/>

**6 задача:**

Напишите функцию `combineArrays` которая объединяет любое количество переданных в нее массивов, и 
далее функция преобразовывает итоговый массив в строку и возвращает ее;

```JavaScript
    combineArrays([1], [2,3], [4,5,6]); // 1,2,3,4,5,6
    combineArrays(["Hello"], ["friends", "!"], [4,5,6], [99, "=)"]); // Hello,friends,!,4,5,6,99,=)
```

<hr/>

**7 задача:**

Создайте функцию `usePerson` которая будет возвращать кортеж из двух значений. 
Первое значение это объект c полями name и age;
Второе значение это функция которая изменяет поля данного объекта;

С помощью деструктурирующего присваивания получите в переменные эти два значения из функции и далее несколько раз измените объект с помощью полученной функции и выведите результаты в консоль.

Также можно предусмотреть дополнительные проверки внутри `usePerson` на наличие свойства в передаваемом объекте в полученую фукнцию

```JavaScript
    const usePerson = (initialValue = {}) => {...};

    тут создаются переменные из кортежа person и setPerson = usePerson({ name: "Alex", age: 23 });

    console.log(person); // { name: "Alex", age: 23 }

    setPerson({ name: "Marina", age: 25 });
    console.log(person); // { name: "Marina", age: 25 }

    setPerson({ name: "Kate", age: 28 });
    console.log(person); // { name: "Kate", age: 28 }

    // с доп проверками:
    setPerson({ name: "Nik" });
    console.log(person); // { name: "Nik", age: undefined }

    setPerson({});
    console.log(person); // { name: undefined, age: undefined }
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
  const users = [
    { id: 1, name: "Alex", age: 35, position: "manager" },
    { id: 2, name: "Kate", age: 22, position: "qa" },
    { id: 3, name: "Nikita", age: 29, position: "developer" },
  ];

  for (const user of users) {
    log(`User -> ${user.name} ${user.age} ${user.position}`);
  }
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
 const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];

 const newNumbers = numbers.sort((a, b) => a - b).reverse();

 console.log(newNumbers); // [119, 99, 90, 81, 77, 12, 5, 4, 3]
 
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
 const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
 
 const transformIntoString = (separator = ",") => {
   return cars.join(separator);
 }
 
 const newCars = transformIntoString("--");

 console.log(newCars); // audi--ford--mercedes--mazda--teslas
```
</details>

<details>
    <summary>Решение - Задача 4: </summary>

```
 const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

 const addNewCar = (car) => {
    if (!cars.includes(car)) {
       cars.push(car);
    }
 }

 addNewCar("volvo");
 addNewCar("audi");
 addNewCar("bmw");

 console.log(cars); // ['audi', 'ford', 'mercedes', 'mazda', 'tesla', 'volvo', 'bmw']
```
</details>

<details>
    <summary>Решение - Задача 5: </summary>

```
  const calcSum = (...numbers) => {
    let sum = 0;

    for (const num of numbers) {
      sum += num;
    }

    return sum;
  }
```
</details>

<details>
    <summary>Решение - Задача 6: </summary>

```
  const combineArrays = (...arrays) => {
    const newArray = [];

    for (let i = 0; i < arrays.length; i++) {
      newArray.push(...arrays[i]);
    }

    return newArray.join();
  }

  combineArrays([1], [2,3], [4,5,6]); // 1,2,3,4,5,6
  combineArrays(["Hello"], ["friends", "!"], [4,5,6], [99, "=)"]); // Hello,friends,!,4,5,6,99,=)
```
</details>

<details>
    <summary>Решение - Задача 7: </summary>

```
  const usePerson = (initialValue = {}) => {
    const person = initialValue;

    const changePerson = (newPerson = {}) => {
        if ("name" in newPerson) {
          person.name = newPerson.name;
        } else {
          person.name = undefined;
        }

        if ("age" in newPerson) {
          person.age = newPerson.age;
        } else {
          person.age = undefined;
        }
    };

    return [person, changePerson];
  }

  const [person, setPerson] = usePerson({ name: "Alex", age: 23 });

  console.log(person); // { name: "Alex", age: 23 }

  setPerson({ name: "Marina", age: 25 });
  console.log(person); // { name: "Marina", age: 25 }

  setPerson({ name: "Kate", age: 28 });
  console.log(person); // { name: "Kate", age: 28 }

  setPerson({ name: "Nik" });
  console.log(person); // { name: "Nik", age: undefined }

  setPerson({});
  console.log(person); // { name: undefined, age: undefined }
```
</details>
