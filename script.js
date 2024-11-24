document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    displayStoredUsers();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, email });
            localStorage.setItem('users', JSON.stringify(users));

            displayStoredUsers();

            form.reset();
        }
    });

    function displayStoredUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. Tên: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    }
});
