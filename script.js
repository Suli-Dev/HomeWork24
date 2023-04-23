const btnGetUsers = document.querySelector('#btn-get-users');
const userList = document.querySelector('#user-list');

btnGetUsers.addEventListener('click', getUsers);

function getUsers() {
    userList.innerHTML = 'Загрузка...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const userItem = document.createElement('li');
                userItem.classList.add('user-item');
                userItem.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                `;
                userList.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error('Ошибка получения пользователей:', error);
            userList.innerHTML = 'Ошибка получения пользователей';
        });
}
