const form = document.getElementById('register-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const data = new FormData();
        data.append('username', username.value);
        data.append('password', password.value);
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST','http://localapps.servegame.com/registerandlogin/register.controller.php', true);

    xhr.onload = (response) => {
        console.log(JSON.parse(response.currentTarget.response))
    }
    xhr.send(data);
})
