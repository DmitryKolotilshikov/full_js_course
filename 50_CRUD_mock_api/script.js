/* 
 CRUD операции

 C - CREATE  [POST]
 R - READ    [GET]
 U - UPDATE  [PATCH, PUT]
 D - DELETE  [DELETE]

 PATCH используется для частичных обновления ресурса, а PUT — для замены всего ресурса
 (в уроке используем PUT, так как mock api не поддерживает PATCH)
 (НО у mock api PUT может имитировать метод PATCH)

 https://mockapi.io
*/

const createUserBtn = document.querySelector("#btn-create");
const editUserBtn = document.querySelector("#btn-edit");
const removeUserBtn = document.querySelector("#btn-remove");
const userContainer = document.querySelector("#user-container");

const MOCK_API_URL = "https://65ec69440ddee626c9b03358.mockapi.io/users";

let users = [];

createUserBtn.addEventListener("click", () => createNewUser())
editUserBtn.addEventListener("click", () => editExistingUser())
removeUserBtn.addEventListener("click", () => removeExistingUser())

// ------- Отрисовка пользователей -------
renderUsers = () => {
    userContainer.innerHTML = "";

    users.forEach(user => {
        const userWrapper = document.createElement("section");
        const userName = document.createElement("h3");
        const userCity = document.createElement("p");
        const userAvatar = document.createElement("img");

        userName.textContent = `Name: ${user.name}`;
        userCity.textContent = `City: ${user.city}`;
        userAvatar.src = user.avatar;
        userWrapper.append(userName, userCity, userAvatar);

        userContainer.append(userWrapper);
    })
}

// ------- Удаление существующего пользователя -------
const removeExistingUser = async () => {
    try {
        const ID = "6"; // в реальности всегда динамичное

        const response = await fetch(`${MOCK_API_URL}/${ID}`, {
            method: 'DELETE',
        });

        if (response.status === 404) {
            throw new Error(`${ID} не найден`);
        }

        const removedUser = await response.json();

        users = users.filter((user) => user.id !== removedUser.id);
        renderUsers();

        console.log("ПОЛЬЗОВАТЕЛЬ УСПЕШНО УДАЛЕН");
    } catch (error) {
        console.error("ОШИБКА при удалении пользователя: ", error.message)
    }
}

// ------- Изменение существующего пользователя -------
const editExistingUser = async () => {
    try {
        const ID = "1"; // в реальности всегда динамичное

        const response = await fetch(`${MOCK_API_URL}/${ID}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: "Marina",
                city: "Tashkent",
                avatar: "https://avatars.mds.yandex.net/i?id=6444bd82bce43803b8ad0601c12a80e7-5230955-images-thumbs&n=13"
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const editedUser = await response.json();

        users = users.map((user) => {
            if (user.id === editedUser.id) {
                return editedUser;
            }
            return user;
        })
        renderUsers();

        console.log("ПОЛЬЗОВАТЕЛЬ УСПЕШНО ОТРЕДАКТИРОВАН");
    } catch (error) {
        console.error("ОШИБКА при редактировании пользователя: ", error.message)
    }
}

// ------- Создание нового пользователя -------
const createNewUser = async () => {
    try {
        const response = await fetch(MOCK_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                name: "Valentina",
                city: "Tokio",
                avatar: "https://avatars.mds.yandex.net/i?id=7d3c8e0a5e3e1ea0705bdd6c0139af4b6767cc57-10852819-images-thumbs&n=13"
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const newCreatedUser = await response.json();

        users.unshift(newCreatedUser);
        renderUsers();

        console.log("НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО СОЗДАН");
    } catch (error) {
        console.error("ОШИБКА создания нового пользователя: ", error.message)
    }
}

// ------- Получение всех пользователей -------
const getUsersAsync = async () => {
    try {
        console.log("СТАРТ ПРОЦЕССА")

        const response = await fetch(MOCK_API_URL);
        users = await response.json();

        renderUsers();
    } catch (error) {
        console.error("ПОЙМАННАЯ ОШИБКА: ", error.message)
    } finally {
        console.log("ФИНИШ ПРОЦЕССА")
    }
}

getUsersAsync();
