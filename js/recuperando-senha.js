const container = document.querySelector(".login-container")
const form = document.querySelector(".formSubmit1");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const token = document.querySelector(".token-input");



form.addEventListener('submit', function (e) {

    e.preventDefault();


    const dadosRecupera = { email: email.value, token: token.value, password: password.value }

    fetch('http://localhost:3000/auth/recuperar_senha', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosRecupera)
    }).then(function (response) {
        return response.json();
    }).then(function (dado) {
        console.log(dado);
    }).catch(err => {
        console.log(err);
    });



});