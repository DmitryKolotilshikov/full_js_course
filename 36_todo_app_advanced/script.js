import { getDateRepresentation, saveTodosIntoLocalStorage, getTodosFromLocalStorage } from "./utils.js";

const addTodoInput = document.querySelector("[data-add-todo-input]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");
const searchTodoInput = document.querySelector("[data-search-todo-input]");
const todosContainer = document.querySelector("[data-todo-container]");
const todoTemplate = document.querySelector("[data-todo-template]");

let todoList = getTodosFromLocalStorage();
let filteredTodoList = [];

addTodoBtn.addEventListener("click", () => {
    if (addTodoInput.value.trim()) {
        const newTodo = {
            id: Date.now(),
            text: addTodoInput.value.trim(),
            completed: false,
            createdAt: getDateRepresentation(new Date()),
        }
        todoList.push(newTodo);
        addTodoInput.value = "";

        saveTodosIntoLocalStorage(todoList);
        renderTodos();
    }
})

addTodoInput.addEventListener("input", () => {
    if (searchTodoInput.value.trim()) {
        searchTodoInput.value = "";
        renderTodos();
    }
})

searchTodoInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.trim();

    filterAndRenderFilteredTodos(searchValue);
})

const filterAndRenderFilteredTodos = (searchValue) => {
    filteredTodoList = todoList.filter((t) => t.text.includes(searchValue));
    renderFilteredTodos();
}

const createTodoLayout = (todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);

    const checkbox = todoElement.querySelector("[data-todo-checkbox]");
    checkbox.checked = todo.completed;

    const todoText = todoElement.querySelector("[data-todo-text]");
    todoText.textContent = todo.text;

    const todoCreatedDate = todoElement.querySelector("[data-todo-date]");
    todoCreatedDate.textContent = todo.createdAt;

    const removeTodoBtn = todoElement.querySelector("[remove-todo-btn]");
    removeTodoBtn.disabled = !todo.completed;

    checkbox.addEventListener("change", (e) => {
        todoList = todoList.map((t) => {
            if (t.id === todo.id) {
                t.completed = e.target.checked;
            }
            return t;
        })

        saveTodosIntoLocalStorage(todoList);

        if (searchTodoInput.value.trim()) {
            filterAndRenderFilteredTodos(searchTodoInput.value.trim());
        } else {
            renderTodos();
        }
    })

    removeTodoBtn.addEventListener("click", () => {
        todoList = todoList.filter((t) => {
            if (t.id !== todo.id) {
                return t;
            }
        })

        saveTodosIntoLocalStorage(todoList);

        if (searchTodoInput.value.trim()) {
            filterAndRenderFilteredTodos(searchTodoInput.value.trim());
        } else {
            renderTodos();
        }
    });

    return todoElement;
}

const renderTodos = () => {
    todosContainer.innerHTML = "";

    if (todoList.length === 0) {
        todosContainer.innerHTML = `<h3>No todos...</h3>`;
        return;
    }

    todoList.forEach((todo) => {
        const todoElement = createTodoLayout(todo);
        todosContainer.append(todoElement);
    })
}

const renderFilteredTodos = () => {
    todosContainer.innerHTML = "";

    if (filteredTodoList.length === 0) {
        todosContainer.innerHTML = `<h3>No todos found...</h3>`;
        return;
    }

    filteredTodoList.forEach((todo) => {
        const todoElement = createTodoLayout(todo);
        todosContainer.append(todoElement);
    })
}

renderTodos();