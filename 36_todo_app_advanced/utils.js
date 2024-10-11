export const getDateRepresentation = (date) => {
    return Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "numeric", year: "numeric" }).format(date);
}

export const saveTodosIntoLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export const getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}