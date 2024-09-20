# Задачи (DOM - basics, navigation)

**1 задача:**

Напишите код, чтобы получить

- элемент `h2`
- `ol`
- второй `li` (с именем Elena)
- третий `li` (с именем Olga)
 
```html
    <h2>Employees:</h2>
    <ol>
      <li>Alex</li>
      <li>Elena</li>
      <li>Olga</li>
    </ol>
```

<hr/>

**2 задача:**

Напишите код, чтобы получит внчале `p` а затем получить его соседей
`h3` и `span`. 
Далее получите текст из `h3` и `span`, поместите текст
в переменную `greeting` и выведите в консоль.

```html
  <h3>Hello</h3>
  <p>Lorem, ipsum dolor.</p>
  <span>World!</span>
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
   // h2
   document.body.firstElementChild
   document.body.children[0]

   // ol
   document.body.children[1]
   document.body.lastElementChild // может быть скрипт если используете live server

   // li - Elena
   document.body.lastElementChild.children[1] // может быть скрипт если используете live server
   document.body.children[1].children[1]

   // li - Olga
   document.body.children[1].children[2]
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
 const p = document.body.children[1];
 const h3 = p.previousElementSibling;
 const span = p.nextElementSibling;

 const textH3 = h3.textContent;
 const textSpan = span.textContent;

 const greeting = `${textH3} ${textSpan}`;

 console.log(greeting);
```
</details>
