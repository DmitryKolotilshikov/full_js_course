const form = document.querySelector("[data-search-form]");
const input = document.querySelector("[data-search-input]");
const userInfoContainer = document.querySelector("[data-user-info-container]");
const reposContainer = document.querySelector("[data-repos-container]");


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = input.value.trim();

    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    userInfoContainer.innerHTML = '<p>Loading...</p>';
    reposContainer.innerHTML = "";

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('User not found');

        const userData = await userResponse.json();

        userInfoContainer.innerHTML = `
          <div>
            <img src="${userData.avatar_url}" alt="${userData.login}">
            <h2>${userData.name || userData.login}</h2>
            <p>${userData.bio || 'No bio available'}</p>
          </div>
        `;

        const reposResponse = await fetch(userData.repos_url);
        if (!reposResponse.ok) throw new Error('Could not fetch repos');

        const repos = await reposResponse.json();

        if (repos.length) {
            reposContainer.innerHTML = '<h3>Repositories:</h3>';

            repos.forEach(repo => {
                reposContainer.innerHTML += `
                  <div class="repo">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                `;
            });
        } else {
            reposContainer.innerHTML = '<p>No repositories found</p>';
        }
    } catch (error) {
        userInfoContainer.innerHTML = `<p>${error.message}</p>`;
    }
});