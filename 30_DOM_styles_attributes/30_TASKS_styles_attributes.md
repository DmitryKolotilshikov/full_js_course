# Задачи (DOM & CSS, styles, attributes)

**1 задача:**

Создайте элемент ссылки с помощью JS. Добавьте контент для ссылки.

Далее добавить динамически данному элементу атрибуты:
- `href` со значением `https://любой сайт`;
- `target` со значением `_blank`;

Далее присоединить элемент к `body`.
 
```JavaScript
   const link = 
```

<hr/>

**2 задача:**

Создайте функцию `showAlert(className, message)` у которой есть два параметра `className` и `message`.
Функция динамически создает `div` которому присваивает класс с названием `className` и добавляет
контент `message`.
После функция добавляет элемент в `body` в самом начале.
Также должен быть файл `.css` где будет создан класс передаваемый в функцию `showAlert`.
 
```JavaScript
    const showAlert = (className, message) => {}
```

<hr/>

**3 задача:**

Создайте таблицу в HTML `(пример ниже)` с `data-*` атрибутами.
В скрипте нужно:
- получить элемент `table` в переменную по data- атрибуту;
- получить все строки у `table` в переменную по data- атрибутам;
- добавить стили `border` и `borderCollapse` таблице
- пробежаться по всем строкам взять колонки (ячейки) по data- атрибутам;
- пробежаться по всем ячейкам по data- атрибутам;
- вытащить значения для ячеек из их же data- атрибутов и распарсить;
- присвоить каждой ячейке контент `row-1; col-1;`, `row-1; col-2;` ... исходя из значения в `data-cell`
в `data-cell` массив где первый элемент номер строки, а второй номер ячейки
- добавить стили `border` и `padding` каждой ячейке

P.S Вы можете потом добавлять сколько угодно много строк и столбцов в html в таблицу и все динамически
должно отрабатывать и отрисовываться

```html
    <table data-skills-table>
        <tbody>
          <tr data-row="1">
            <td data-cell="[1, 1]"></td>
            <td data-cell="[1, 2]"></td>
          </tr>
          <tr data-row="2">
            <td data-cell="[2, 1]"></td>
            <td data-cell="[2, 2]"></td>
          </tr>
        </tbody>
    </table>
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
  const link = document.createElement("a");
  link.textContent = "ссылка на YouTube";
  link.href = "https://youtube.com";
  link.target = "_blank";

  document.body.prepend(link);
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
   const showAlert = (className, message) => {
      const alert = document.createElement("div");
      alert.classList.add(className);
      alert.textContent = message;

      document.body.prepend(alert);
   }
```
</details>

<details>
    <summary>Решение - Задача 3: </summary>

```
    // HTML
    <table data-skills-table>
        <tbody>
          <tr data-row="1">
            <td data-cell="[1, 1]"></td>
            <td data-cell="[1, 2]"></td>
          </tr>
          <tr data-row="2">
            <td data-cell="[2, 1]"></td>
            <td data-cell="[2, 2]"></td>
          </tr>
          <tr data-row="3">
            <td data-cell="[3, 1]"></td>
            <td data-cell="[3, 2]"></td>
          </tr>
        </tbody>
    </table>

    // JS
    const table = document.querySelector("[data-skills-table]");
    const tableRows = table.querySelectorAll("[data-row]");

    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    tableRows.forEach(row => {
        const cell = row.querySelectorAll("[data-cell]");

        cell.forEach(cell => {
            cell.style.border = "1px solid black";
            cell.style.padding = "1em";
            const sellData = JSON.parse(cell.dataset.cell);

            cell.textContent = `row-${sellData[0]}; col-${sellData[1]};`;
        })
    })
```
</details>
