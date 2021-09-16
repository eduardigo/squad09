const form = document.querySelector(".login-container");
const email = document.querySelector(".email-input");


form.addEventListener('submit', function (e) {

    e.preventDefault();

    const data = { email: email.value };

    fetch('http://localhost:3000/auth/esqueceu_senha', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(function(response) {
        console.log("teste");
        return response.json();
    });

    

});