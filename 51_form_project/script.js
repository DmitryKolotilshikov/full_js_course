const form = document.querySelector("[data-form]");
const inputName = document.querySelector("#nameId");
const formSubmitBtn = document.querySelector("[data-form-submit-btn]");
const usersContainer = document.querySelector("[data-users-container]");

const MOCK_API_URL = "https://675c54bafe09df667f63812c.mockapi.io/users";

let users = [];

inputName.addEventListener("input", (e) => {
    const { target } = e;
    // console.log(target.validity);
    // console.log(target.checkValidity());

    // if (!target.value.toUpperCase().endsWith("BY")) {
    //     target.setCustomValidity("Please enter BY at the end");
    //   }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // for (const field of formData.values()) {
    //     console.log(field)
    // }
    const formUserData = Object.fromEntries(formData);

    const newUserData = {
        name: formUserData.userName,
        city: formUserData.userCity,
        email: formUserData.userEmail,
        avatar: formUserData.userImageUrl,
    }

    console.log(newUserData);
    createNewUserAsync(newUserData);
})

usersContainer.addEventListener("click", (e) => {
    if (e.target.dataset.userId !== undefined) {
        removeExistingUserAsync(e.target.dataset.userId)
    }
})

// ------- Получение всех пользователей -------
const getUsersAsync = async () => {
    try {
        const response = await fetch(MOCK_API_URL);
        users = await response.json();

        renderUsers();
    } catch (error) {
        console.error("ПОЙМАННАЯ ОШИБКА: ", error.message)
    }
}

// ------- Удаление существующего пользователя -------
const removeExistingUserAsync = async (userId) => {
    try {
        const response = await fetch(`${MOCK_API_URL}/${userId}`, {
            method: 'DELETE',
        });

        if (response.status === 404) {
            throw new Error(`${ID} не найден`);
        }

        const removedUser = await response.json();

        users = users.filter((user) => user.id !== removedUser.id);
        renderUsers();

        alert("ПОЛЬЗОВАТЕЛЬ УСПЕШНО УДАЛЕН");
    } catch (error) {
        console.error("ОШИБКА при удалении пользователя: ", error.message)
    }
}

// ------- Создание нового пользователя -------
const createNewUserAsync = async (newUserData) => {
    try {
        const response = await fetch(MOCK_API_URL, {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const newCreatedUser = await response.json();

        users.unshift(newCreatedUser);
        renderUsers();
        form.reset();

        alert("НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО СОЗДАН");
    } catch (error) {
        console.error("ОШИБКА создания нового пользователя: ", error.message)
    }
}

// ------- Отрисовка пользователей -------
renderUsers = () => {
    usersContainer.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        const userName = document.createElement("h3");
        const userCity = document.createElement("p");
        const userEmail = document.createElement("span");
        const userAvatar = document.createElement("img");
        const userRemoveBtn = document.createElement("button");
        userRemoveBtn.classList.add("user-remove-btn");
        userRemoveBtn.dataset.userId = user.id;

        userName.textContent = `${user.name}`;
        userCity.textContent = `City: ${user.city}`;
        userEmail.textContent = `Email: ${user.email}`;
        userRemoveBtn.textContent = "❌";
        userAvatar.src = user.avatar;

        userCard.append(userName, userCity, userEmail, userAvatar, userRemoveBtn);

        usersContainer.append(userCard);
    })
}

getUsersAsync();