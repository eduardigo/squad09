const cadastroForm = document.querySelector('.login-form');
const nome = document.querySelector('.login-input');
const email = document.querySelector('.email-input');
const senha = document.querySelector('.senha-input');
const confirmarSenha = document.querySelector('.senha2-input');
const confirmar = document.querySelector(".login-submit");


cadastroForm.addEventListener('submit', function (e) {

    e.preventDefault();

    if (senha.value == confirmarSenha.value && nome.value != "" && email.value != "" && senha.value != "" && confirmarSenha.value != "") {

        const cadastroData = { name: nome.value, email: email.value, password: senha.value };

        fetch('http://localhost:3000/auth/registro', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cadastroData)
        }).then(function (response) {
            console.log(JSON.stringify(cadastroData));
            return response.json();
        // }).then(function (data) {
        //     sessionStorage.setItem("token", data.token);
        }).then(function (){
            window.location.href = "protocolo.html";
            }).catch(function (error) {
                console.log(error);
            })

    }

    if (senha.value != confirmarSenha.value) {

        console.log("As senhas não coincidem!");
    }

});

