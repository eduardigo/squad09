const container = document.querySelector(".container");

const agendar = document.querySelector(".agendar");
const agendarClicked = document.querySelector('.agendar-clicked');

const verAgenda = document.querySelector('.ver-agenda');
const verAgendaClicked = document.querySelector('.ver-clicked');

const unid = document.querySelector(".unid");

const santos = document.querySelector(".unitSantos");
const santosClicked = document.querySelector(".unitSantos-Clicked");

const sp = document.querySelector(".unitSP");
const spClicked = document.querySelector(".unitSP-Clicked");

const cadDiv = document.querySelector(".cad-flex")

const cadeiraDisponivel = document.querySelector(".disponivel");

const cadeirasDisponiveis = document.querySelectorAll(".disponivel");

const cadeiraOcupada = document.querySelector(".ocupada");

const calendario = document.querySelector(".data");

const confirmar = document.querySelector(".confirmar");

const cancelar = document.querySelector(".cancelar");



//desabilitando botoes
sp.classList.add("disabled");
santos.classList.add("disabled");
calendario.classList.add("disabled");
confirmar.classList.add("disabled");
cancelar.classList.add("disabled");



for (var i = 0; i < cadeirasDisponiveis.length; i++) {
    var desabilitaCadeiras = cadeirasDisponiveis[i];
    desabilitaCadeiras.classList.add("disabled");
}


clickAgendar();
clickVerAgendamentos();
clickSP();
clickSantos();
selecionaCadeira();
// clickConfirmar();





function clickAgendar() {
    agendar.addEventListener("click", (e) => {

        if (e.target.classList.contains("agendar") && !e.target.classList.contains("agendar-clicked")) {
            verAgenda.classList.remove("ver-clicked");
            e.target.classList.toggle("agendar-clicked");

        }
        else {
            agendar.classList.remove("agendar-clicked");
        }
        if (e.target.classList.contains("agendar-clicked") || (e.target.classList.contains("ver-clicked"))) {
            sp.classList.remove("disabled");
            santos.classList.remove("disabled");
            if (!cadeiraDisponivel.classList.contains("disabled")) {
                confirmar.classList.remove("disabled");
                cancelar.classList.remove("disabled");
            }

        } else {
            sp.classList.add("disabled");
            santos.classList.add("disabled");
            confirmar.classList.add("disabled");
            cancelar.classList.add("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");
            }

        }
    });
}

function clickVerAgendamentos() {
    verAgenda.addEventListener("click", (e) => {

        if (e.target.classList.contains("ver-agenda") && !e.target.classList.contains("ver-clicked")) {
            agendar.classList.remove("agendar-clicked");
            e.target.classList.toggle("ver-clicked");
        } else {
            verAgenda.classList.remove("ver-clicked")
        }
        if (e.target.classList.contains("agendar-clicked") || (e.target.classList.contains("ver-clicked"))) {
            sp.classList.remove("disabled");
            santos.classList.remove("disabled");
        } else {
            sp.classList.add("disabled");
            santos.classList.add("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");
            }

        }

    });
}


function clickSantos() {
    unid.addEventListener("click", (e) => {

        if (e.target.classList.contains("unitSantos") && !e.target.classList.contains("unitSantos-clicked") && !e.target.classList.contains("disabled")) {
            sp.classList.remove("unitSP-clicked");
            e.target.classList.toggle("unitSantos-clicked");
        }
        else if (!e.target.classList.contains("disabled")) {
            santos.classList.remove("unitSantos-clicked");
        }

        if (e.target.classList.contains("unitSP-clicked") || (e.target.classList.contains("unitSantos-clicked") && !e.target.classList.contains("disabled"))) {
            calendario.classList.remove("disabled");
            calendario.classList.remove("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.remove("disabled");
            }

        } else {
            calendario.classList.add("disabled");
            calendario.classList.add("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");
            }

        }

    });
}


function clickSP() {
    unid.addEventListener("click", (e) => {
        if (e.target.classList.contains("unitSP") && !e.target.classList.contains("unitSP-clicked")) {
            santos.classList.remove("unitSantos-clicked");
            e.target.classList.toggle("unitSP-clicked");
        } else {
            sp.classList.remove("unitSP-clicked")
        }

        if (e.target.classList.contains("unitSP-clicked") || (e.target.classList.contains("unitSantos-clicked"))) {
            calendario.classList.remove("disabled");
            calendario.classList.remove("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.remove("disabled");
            }

        } else {
            calendario.classList.add("disabled");
            calendario.classList.add("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");
            }

        }

    });
}


function selecionaCadeira() {
    cadDiv.addEventListener("click", (e) => {

        if (e.target.classList.contains("disponivel") && e.target.getAttribute("id") != ("selecionada") && !e.target.classList.contains("bloqueada")) {
            const cadeiraSelecionada = document.getElementById("selecionada");
            if (cadeiraSelecionada) {
                cadeiraSelecionada.removeAttribute("id", "selecionada");
            }
            e.target.setAttribute('id', 'selecionada');
            confirmar.classList.remove("disabled");
            cancelar.classList.remove("disabled");
        } else if (!e.target.classList.contains("bloqueada")) {
            confirmar.classList.add("disabled");
            cancelar.classList.add("disabled");
            e.target.removeAttribute("id", "selecionada");
        }
    });
}


// function clickConfirmar() {

//     confirmar.addEventListener("submit", (e) => {

//         e.preventDefault();

//         const data = {}

//     });

// }



function clickCancelar() {

}

