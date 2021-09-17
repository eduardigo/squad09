const loginForm = document.querySelector('#formLogar');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const resetPassword = document.querySelector('.login-reset');

var userID = "";

// ação disparada ao apertar o botão de login 
loginForm.addEventListener('submit', function (e) {
    //impede a página de apagar os valores do form/recarregar a página
    e.preventDefault();
    // teste para saber se o e-mail e a senha estão passando
    console.log(email.value);
    console.log(password.value);

    const data = { email: email.value, password: password.value };

    fetch('http://localhost:3000/auth/autenticacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.status == 404) {
            console.log("Usuário não encontrado");
            return;
        } if (response.status == 401) {
            console.log("Senha inválida");
            return;
        } else {
            return response.json();
        }
    }).then(function (data) {
        // passando o token do usuário para a sessionStorage (para uma possível funcionalidade futura)
        // sessionStorage = guarda na memória até fechar o navegador. localStorage
        // console.log(data);
        sessionStorage.setItem("userID", data.user._id)
        userID = sessionStorage.getItem("userID");
        console.log(userID);
        sessionStorage.setItem("token", data.token)
        console.log(JSON.stringify(data.token));
        // troca de pagina
        window.location.href = "protocolo.html";


    }).catch(function (error) {
        console.log(error);
    })
});



loginForm.addEventListener('submit', function (e) {

    e.preventDefault();


    

});