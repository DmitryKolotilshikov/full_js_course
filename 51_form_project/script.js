const form = document.querySelector("[data-form]");
const formSubmitBtn = document.querySelector("[data-form-submit-btn]");
const usersContainer = document.querySelector("[data-users-container]");
const editUserFormDialog = document.querySelector("[data-edit-user-form-dialog]");

const MOCK_API_URL = "https://675c54bafe09df667f63812c.mockapi.io/users";

let users = [];

// ------- Событие отравки формы создания пользователя -------
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

    createNewUserAsync(newUserData);
})

// ------- Заполнение модального окна разметкой формы -------
const populateDialog = (userId) => {
    editUserFormDialog.innerHTML = "";

    const editForm = document.createElement("form");
    const closeFormBtn = document.createElement("button");

    closeFormBtn.classList.add("close-edit-form-btn");
    closeFormBtn.textContent = "❌";
    closeFormBtn.addEventListener("click", () => editUserFormDialog.close());

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(editForm);

        const formUserData = Object.fromEntries(formData);

        const newUserData = {
            id: formUserData.userId,
            name: formUserData.userName,
            city: formUserData.userCity,
            email: formUserData.userEmail,
            avatar: formUserData.userImageUrl,
        }

        editExistingUserAsync(newUserData);
    })

    editForm.classList.add("form");

    editForm.innerHTML = `
        <input type="text" name="userId" value="${userId}" hidden/>

        <div class="control-field">
            <label for="nameId" class="form-label">Name</label>
            <input type="text" name="userName" id="nameId" class="form-control" required minlength="2"
                maxlength="13" />
        </div>

        <div class="control-field">
            <label for="cityId" class="form-label">City</label>
            <input type="text" name="userCity" id="cityId" class="form-control" required minlength="2"
                maxlength="30" />
        </div>

        <div class="control-field">
            <label for="emailId" class="form-label">Email</label>
            <input type="email" name="userEmail" id="emailId" class="form-control form-control--email"
                required />
        </div>

        <div class="control-field">
            <label for="imagesUrlId" class="form-label">Email</label>

            <select name="userImageUrl" id="imagesUrlId" class="form-control form-control--images" required>
                <option value="">Image URL</option>
                <hr>
                <option
                    value="https://avatars.mds.yandex.net/i?id=88cc30ba21222ee61db2d32974a5b380259ee41f-3380069-images-thumbs&n=13">
                    Cat 1</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=6444bd82bce43803b8ad0601c12a80e7-5230955-images-thumbs&n=13">
                    Cat 2</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=60f5028735fd33706fd8e50bb1d7f636062b21a4-8210619-images-thumbs&n=13">
                    Cat 3</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=ae0521f7a56e37beaa15c3469ab4c338e350c501-4453150-images-thumbs&n=13">
                    Dog 1</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=fec854b859968252cfa2ac789041838662475e7e-4667938-images-thumbs&n=13">
                    Dog 2</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=26253ff7e734e6fd0431b2fbc2b4a1a669ed2685be8a39d1-9148232-images-thumbs&n=13">
                    Dog 3</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=eaed52ea5bd298c60ff850710e5d05ddd9d26b49-8082760-images-thumbs&n=13">
                    Wolf 1</option>
                <option
                    value="https://avatars.mds.yandex.net/i?id=730e0bcc75f17fff296adf3dcdaae2036067665ec12d546e-12645552-images-thumbs&n=13">
                    Fox 1</option>
            </select>
        </div>

        <button type="submit" class="btn submit-btn">Edit User</button>
    `

    editUserFormDialog.append(closeFormBtn, editForm);
}


// ------- Клик по всему контейнеру (делегирование событий) -------
usersContainer.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-user-edit-btn")) {
        // console.log("userEditBtn" in e.target.dataset)
        populateDialog(e.target.dataset.userId);

        editUserFormDialog.showModal();
        return;
    }
    if (e.target.hasAttribute("data-user-remove-btn")) {
        const isRemoveUser = confirm("точно удалить пользователя?");
        isRemoveUser && removeExistingUserAsync(e.target.dataset.userId);
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

// ------- Редактирование существующего пользователя -------
const editExistingUserAsync = async (newUserData) => {
    try {
        const response = await fetch(`${MOCK_API_URL}/${newUserData.id}`, {
            method: 'PUT',
            body: JSON.stringify(newUserData),
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

        editUserFormDialog.close();
        renderUsers();

        alert("ПОЛЬЗОВАТЕЛЬ УСПЕШНО ОТРЕДАКТИРОВАН");
    } catch (error) {
        console.error("ОШИБКА при редактировании пользователя: ", error.message)
    }
}

// ------- Отрисовка пользователей -------
renderUsers = () => {
    usersContainer.innerHTML = "";

    users.forEach(user => {
        usersContainer.insertAdjacentHTML("beforeend", `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>City: ${user.city}</p>
                <span>Email: ${user.email}</span>
                <img src="${user.avatar}"/>
                <button class="user-edit-btn" data-user-id="${user.id}" data-user-edit-btn>🛠️</button>
                <button class="user-remove-btn" data-user-id="${user.id}" data-user-remove-btn>❌</button>
            </div>
        `)
    })
}

getUsersAsync();