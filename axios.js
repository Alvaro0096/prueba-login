// const getData = () => {
//     axios.get('https://reqres.in/api/users')
//     .then(response => {
//         console.log(response);
//     })
// }

let userName = document.getElementById('username');
let pass = document.getElementById('password');

const sendData = () => {
    axios.post('http://localapps.servegame.com/registerandlogin/register.controller.php', {
        username: `${userName.value}`,
        password: `${pass.value}`
    })
    .then(response => response)
    .catch(error => {
        console.log(error, error.response);
    })
};

const form = document.getElementById('register-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    sendData();
});