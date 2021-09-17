const container = document.querySelector(".login-container")
const form = document.querySelector(".formSubmit");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const token = document.querySelector(".token-input");



form.addEventListener('submit', function (e) {

    e.preventDefault();

    fetch('http://localhost:3000/auth/esqueceu_senha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value })
    }).then(function (response) {

        window.location.href = "recuperando-senha.html";

        console.log(response);
        return response.json();
    }).catch(err => {
        console.log(err);
    });


});