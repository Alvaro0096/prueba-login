const form = document.getElementById('register-form');
let username = document.getElementById('username');
let pass = document.getElementById('password');

let formData = new FormData();
formData.append('username', username);
formData.append('password', password);

form.addEventListener('submit', e => {
    e.preventDefault();
    sendData();
});

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: formData
        // headers: data ? {'Content-Type' : 'application/json'} : {}
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
    sendHttpRequest('POST', 'http://localapps.servegame.com/registerandlogin/register.controller.php')
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.log(error);
    })
}

