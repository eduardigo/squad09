
const email = document.getElementById('digitar-email');
const password = document.getElementById('digitar-senha');


myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const data = { email: email.value, password: password.value };

    fetch('http://localhost:3000/auth/autenticacao', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();

    }).then(function (data) {
     localStorage.setItem("token",data.token)
    }).catch(function (error) {
        console.log(error);
    })
    // console.log(localStorage.token);
});
