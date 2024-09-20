# Задачи (DOM - get elements)

**1 задача:**

Напишите код для вставки `<li>2</li><li>3</li>` между этими двумя `<li>`:
 
```html
    <ul id="ul">
        <li id="one">1</li>
        <li id="two">4</li>
    </ul>
```

<hr/>

**2 задача:**

Создайте функцию `clear(elem)`, которая удаляет всё содержимое из `elem`.
 
```html
    <ol id="elem">
        <li>Привет</li>
        <li>Мир</li>
    </ol>
```

<hr/>

**3 задача:**

Создайте список.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент `li` и добавляйте его к `ul`.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши `Esc` или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит `HTML-теги`, они должны обрабатываться как текст.

<details>
    <summary>Подсказка</summary>

```
  в задаче используется бесконечный цикл
```
</details>

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
  const one = document.querySelector("#one");

  one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
   // 1 - вариант
    const clear = (elem) => {
        while (elem.firstChild) {
            elem.firstChild.remove();
        }
    }

  // 2 - вариант (более простой)
    const clear = (elem) => {
        elem.innerHTML = '';
    }
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
  const ul = document.createElement("ul");
  document.body.append(ul);

  while (true) {
    const data = prompt("Введите текст для элемента списка", "");

    if (!data) {
      break;
    }

    const li = document.createElement("li");
    li.textContent = data;
    ul.append(li);
  }
```
</details>
