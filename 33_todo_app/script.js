const input = document.querySelector("[data-text-field]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");
const container = document.querySelector("[data-todo-container]");

const todoList = JSON.parse(localStorage.getItem("todos")) || [];

const saveToLocalStorage = (key = "todos") => {
    localStorage.setItem(key, JSON.stringify(todoList));
}

addTodoBtn.addEventListener("click", () => {
    if(input.value.trim()) {
        todoList.push(input.value);
        input.value = "";

        saveToLocalStorage();
        render();
    }
})

const createElement = (tagName, textContent) => {
    const element = document.createElement(tagName);
    element.textContent = textContent;

    return element;
}

const removeTodo = (index) => {
    todoList.splice(index, 1);
    saveToLocalStorage();
    render();
}

const render = () => {
    container.innerHTML = "";
    todoList.forEach((todo, index) => {
        const todoElement = createElement("div", todo);
        const removeBtn = createElement("button", "❌");

        removeBtn.addEventListener("click", () => removeTodo(index))

        todoElement.classList.add("todo-item")
        todoElement.append(removeBtn);

        container.append(todoElement);
    })
}

render();