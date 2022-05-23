const getBtn = document.getElementById('getData');
const postBtn = document.getElementById('postData');

const getData = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
        console.log(response);
    })
}

const sendData = () => {
    axios.post('https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
        // password: "pistol"
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error, error.response);
    })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);