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

const divCadeiras = document.querySelector(".cadeira-flex");
const divCadeiras2 = document.querySelector(".cadeira-flex2");
const cadeiraDisponivel = document.querySelector(".disponivel");
const cadeiraOcupada = document.querySelector(".ocupada");


const teste = document.querySelector(".cadeira-flex input .selecionada");


clickAgendar();
clickVerAgendamentos();
clickSP();
clickSantos();
selecionaCadeira();




















function clickAgendar() {
    agendar.addEventListener("click", (e) => {

        if (e.target.classList.contains("agendar") && !e.target.classList.contains("agendar-clicked")) {
            verAgenda.classList.remove("ver-clicked");
            e.target.classList.toggle("agendar-clicked");
        }
        else {
            agendar.classList.remove("agendar-clicked");
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

    });
}


function clickSantos() {
    unid.addEventListener("click", (e) => {

        if (e.target.classList.contains("unitSantos") && !e.target.classList.contains("unitSantos-clicked")) {
            sp.classList.remove("unitSP-clicked");
            e.target.classList.toggle("unitSantos-clicked");
        }
        else {
            santos.classList.remove("unitSantos-clicked");
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

    });
}


function selecionaCadeira() {

    container.addEventListener("click", (e) => {

        if (e.target.classList.contains("disponivel") && !e.target.classList.contains("selecionada") && !e.target.classList.contains("bloqueada")) {
            const cadeiraSelecionada = document.querySelector(".selecionada");

            if (cadeiraSelecionada) {
                cadeiraSelecionada.classList.remove("selecionada");
            }
            e.target.classList.toggle("selecionada");
        } else {
            e.target.classList.remove("selecionada");
        }
    });
















    // divCadeiras.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("disponivel") && !e.target.classList.contains("selecionada")) {
    //         const cadeiraSelecionada = document.querySelector(".selecionada");
    //         if (cadeiraSelecionada) {
    //             cadeiraSelecionada.classList.add("disponivel");
    //             cadeiraSelecionada.classList.remove("selecionada");

    //         }
    //         console.log("OI");
    //         e.target.classList.remove("disponivel");
    //         e.target.classList.toggle("selecionada");
    //     } else {
    //         e.target.classList.remove("selecionada");
    //     }
    // });

    // divCadeiras2.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("disponivel") && !e.target.classList.contains("selecionada")) {
    //         const cadeiraSelecionada = document.querySelector(".selecionada");
    //         if (cadeiraSelecionada) {
    //             cadeiraSelecionada.classList.add("disponivel");
    //             cadeiraSelecionada.classList.remove("selecionada");

    //         }
    //         console.log("OI");
    //         e.target.classList.remove("disponivel");
    //         e.target.classList.toggle("selecionada");
    //     }
    // });

}
