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


clickAgendar();
clickVerAgendamentos();
clickSP();
clickSantos();





















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

