const cadastroForm = document.getElementById('cadastro-formulario');
const nome = document.getElementById('digitar-nome-cadastro');
const email = document.getElementById('digitar-email-cadastro');
const celular = document.getElementById('digitar-celular-cadastro');
const senha = document.getElementById('digitar-senha-cadastro');
const confirmarSenha = document.getElementById('confirmar-senha-cadastro');


if (senha.value == confirmarSenha.value) {
    cadastroForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const cadastroData = { name: nome.value, email: email.value, password: senha.value };

        console.log(cadastroData)
        fetch('http://localhost:3000/auth/registro', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cadastroData)
        }).then(function (response) {
            console.log(JSON.stringify(cadastroData));
            return response.json();

        }).catch(function (error) {
            console.log(error);
        })
    });
} else {

    confirmarSenha.innerHTML = "digite uma senha idêntica!";

}
