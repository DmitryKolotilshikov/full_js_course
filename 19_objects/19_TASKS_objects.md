# Задачи (Objects - Объекты)

**1 задача:**

Создайте объект `car`, который будет описывать автомобиль. У него должны быть следующие свойства:

`brand` (марка автомобиля)
`model` (модель автомобиля)
`year` (год выпуска)
`isNew` (новая ли машина)

Далее, измените значение в свойстве year на `любое` другое;
Далее, удалите свойство `isNew`;

```JavaScript
    const car = {};
```

<hr/>

**2 задача:**

Создайте объект `calculator` у которого будут 4 свойства-функции. 
- 1 функция `addition` (сложение)
- 2 функция `multiplication` (умножение)
- 3 функция `division` (деление)
- 4 функция `subtraction` (вычитание)

Каждая функция принимает два аргумента `num1` и `num2`;
У каждой функции есть возращаемый результат вычислений; 

```JavaScript
    const calculator = {};
```

<hr/>

**3 задача:**

Создайте объект `student`. Динамически добавьте объекту 3 свойства:
- firstName;
- age;
- address;

Свойство адрес тоже является обьектом.
После создания, проверьте есть ли свойство `isActive` в объекте `student`. Результат проверки присвойте в переменную `checkIsActive`

```JavaScript
    const student = {};
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
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    isNew: false
};
car.year = 2077;
delete car.isNew;

```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
   const calculator = {
        addition: (num1, num2) => {
            return num1 + num2;
        }
        multiplication: (num1, num2) => {
            return num1 * num2;
        }
        division: (num1, num2) => {
            return num1 / num2;
        }
        subtraction: (num1, num2) => {
            return num1 - num2;
        }
    }

    console.log(calculator.addition(10, 10));
    console.log(calculator.multiplication(10, 10));
    console.log(calculator.division(10, 10));
    console.log(calculator.subtraction(10, 10));
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
    const firstName = "Alina";
    const age = 25;
    const address = {
        country: "Japan",
        city: "Tokio"
    };

    const student = {
        firstName,
        age,
        address
    };

    console.log(student);
    console.log(student.firstName, student.age, student.address);

    const checkIsActive = "isActive" in student;

    console.log("Проверка на свойство isActive в объекте student", checkIsActive);
```
</details>