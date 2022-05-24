const form = document.getElementById('register-form');
let username = document.getElementById('username');
let pass = document.getElementById('password');

let formData = new FormData();
formData.append("username", "Moda");
formData.append('password', "123asd");

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        // if(data){
        //     xhr.setRequestHeader('Content-Type', 'application/json');
        // };

        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        
        xhr.onerror = () => {
            reject('Something went wrong');
        };

        xhr.send(formData);
    });
    return promise;
};

// const getData = () => {
//     sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
//         console.log(responseData)
//     });
// };

const sendData = () => {
    sendHttpRequest('POST', 'http://localapps.servegame.com/registerandlogin/register.controller.php')
    .then(responseData => {
        console.log(responseData);
    }).catch(error => {
        console.log(error);
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();
    sendData();
})



