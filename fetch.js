const form = document.getElementById('register-form');
let username = document.getElementById('username');
let pass = document.getElementById('password');

let formData = new FormData();
formData.append('username', `${name.value}`);
formData.append('password', `${pass.value}`);

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type' : 'application/json'} : {}
    })
    .then(response => {
        if(response.status >= 400){ 
            return response.json().then(errResponseData => {
                const error = new Error('Something went wrong');
                error.data = errResponseData;
                throw error;
            });
        } 
        return response.json(); 
    });
}

// const getData = () => {
//     sendHttpRequest('GET', 'https://reqres.in/api/users')
//     .then(responseData => {
//         console.log(responseData);
//     })
// }

const sendData = () => {
    sendHttpRequest('POST', 'http://localapps.servegame.com/registerandlogin/register.controller.php',{
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.log(error);
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();
    sendData();
})