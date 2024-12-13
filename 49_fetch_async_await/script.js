// fetch, async, await, try, catch, finally

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//       .then(response => response.json())
//       .then(json => console.log(json))


// -------------- Renders posts ----------------

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
//     method: "GET",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
//     .then(response => response.json())
//     .then(todos => { console.log(todos); renderPosts(todos) })

// const renderPosts = (todos) => {
//     todos.forEach(todo => {
//         const todoContainer = document.createElement("div");
//         const todoTitle = document.createElement("h3");
//         const todoBody = document.createElement("p");

//         todoTitle.textContent = todo.title;
//         todoBody.textContent = todo.body;
//         todoContainer.append(todoTitle, todoBody);

//         document.body.append(todoContainer);
//     })
// }

// -------------- Renders posts (async & await) ----------------

// const renderPostsAsync = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//     const todos = await response.json();

//     todos.forEach(todo => {
//         const todoContainer = document.createElement("div");
//         const todoTitle = document.createElement("h3");
//         const todoBody = document.createElement("p");

//         todoTitle.textContent = todo.title;
//         todoBody.textContent = todo.body;
//         todoContainer.append(todoTitle, todoBody);

//         document.body.append(todoContainer);
//     })
// }

// renderPostsAsync();

// -------------- Try, catch, finally ----------------

const renderPostsAsync = async () => {
    try {
        console.log("СТАРТ ПРОЦЕССА")

        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const todos = await response.json();

        todos.forEach(todo => {
            const todoContainer = document.createElement("div");
            const todoTitle = document.createElement("h3");
            const todoBody = document.createElement("p");

            todoTitle.textContent = todo.title;
            todoBody.textContent = todo.body;
            todoContainer.append(todoTitle, todoBody);

            document.body.append(todoContainer);
        })
    } catch (error) {
        console.error("ПОЙМАННАЯ ОШИБКА: ", error.message)
    } finally {
        console.log("ФИНИШ ПРОЦЕССА")
    }
}

renderPostsAsync();