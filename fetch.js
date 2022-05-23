const getBtn = document.getElementById('getData');
const postBtn = document.getElementById('postData');

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

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then(responseData => {
        console.log(responseData);
    })
}

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register',{
        email: "eve.holt@reqres.in",
        // password: "pistol"
    })
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.log(error);
    })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);