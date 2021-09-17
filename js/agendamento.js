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

const cadeiras = document.querySelectorAll(".cadeira");

const cadeiraBloqueada = document.querySelector(".bloqueada");

const cadeiraDisponivel = document.querySelector(".disponivel");

const cadeirasDisponiveis = document.querySelectorAll(".disponivel");

const cadeiraOcupada = document.querySelector(".ocupada");

var cadeiraSelecionada = document.querySelector(".selecionada");

const calendario = document.querySelector(".data");

const confirmarData = document.querySelector(".confirmarData");

const confirmar = document.querySelector(".confirmar");

const cancelar = document.querySelector(".cancelar");

var estacaoSantos = document.querySelector(".estacaoSantos");
var estacaoSP = document.querySelector(".estacaoSP");


var idSP = "";
var idSantos = "";
var idUnidadeAtual = "";

var idLugarDisponivel = [];
var idLugarOcupado = [];
var mesaSantos = [];
var cadeiraSantos = [];
var dataSantos = [];
var valueSantos = [];


var mesaSP = [];
var cadeiraSP = [];
var dataSP = [];
var valueSP = [];





var userID = sessionStorage.getItem("userID");


//desabilitando botoes
sp.classList.add("disabled");
santos.classList.add("disabled");
calendario.classList.add("disabled");
confirmar.classList.add("disabled");
cancelar.classList.add("disabled");
confirmarData.classList.add("disabled");



for (var i = 0; i < cadeirasDisponiveis.length; i++) {
    var desabilitaCadeiras = cadeirasDisponiveis[i];
    desabilitaCadeiras.classList.add("disabled");

}







console.log(userID);

abreSite();
clickAgendar();
clickVerAgendamentos();
clickSantos();
clickSP();
selecionaCadeira();
clickConfirmar();
clickCancelar();





function clickAgendar() {
    agendar.addEventListener("click", (e) => {


        // console.log(idSP);
        // console.log(idSantos);


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


        } else {
            sp.classList.remove("unitSP-clicked");
            sp.classList.add("disabled");
            santos.classList.remove("unitSantos-clicked");
            santos.classList.add("disabled");
            confirmar.classList.add("disabled");
            cancelar.classList.add("disabled");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");
                desabilitaCadeiras.classList.remove("selecionada");
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


        fetch(`http://localhost:3000/agendamento/${userID}`, {
            method: 'get',
        }).then(function (response) {

            return response.json();

        }).then(function (dados) {
            for (var i = 0; i < dados.listarAgendamentos.length; i++) {
                console.log(JSON.stringify(dados.listarAgendamentos[i].unidade));
                console.log(JSON.stringify(dados.listarAgendamentos[i].posto));
                console.log(JSON.stringify(dados.listarAgendamentos[i].data));
                console.log(JSON.stringify(dados.listarAgendamentos[i].value));
            }
        })

    });
}



function clickSantos() {

    santos.addEventListener("click", (e) => {


            estacaoSantos.hidden = false;
            estacaoSP.hidden = true;


        idUnidadeAtual = idSantos;
        if (e.target.classList.contains("unitSantos") && !e.target.classList.contains("unitSantos-clicked") && !e.target.classList.contains("disabled")) {
            sp.classList.remove("unitSP-clicked");
            e.target.classList.toggle("unitSantos-clicked");
        }
        else {
            santos.classList.remove("unitSantos-clicked");

            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                if (cadeiras[i] && !cadeiraBloqueada) {
                    cadeiras[i].classList.add("disponivel")
                    cadeirasDisponiveis[i].classList.remove("ocupada")
                }
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");

            }
        }

        if (e.target.classList.contains("unitSP-clicked") || (e.target.classList.contains("unitSantos-clicked") && !e.target.classList.contains("disabled"))) {
            calendario.classList.remove("disabled");
            confirmarData.classList.remove("disabled");

            // for (var i = 0; i < cadeirasDisponiveis.length; i++) {
            //     var desabilitaCadeiras = cadeirasDisponiveis[i];
            //     desabilitaCadeiras.classList.remove("disabled");
            // }

        } else {
            calendario.classList.add("disabled");
            confirmarData.classList.add("disabled");
            // for (var i = 0; i < cadeirasDisponiveis.length; i++) {
            //     var desabilitaCadeiras = cadeirasDisponiveis[i];
            //     desabilitaCadeiras.classList.add("disabled");
            // }
        }

        fetch(`http://localhost:3000/unidade/posto/${idSantos}`, {
            method: 'GET',
        }).then(function (response) {
            return response.json();
        }).then(function (retornoSantos) {
            for (var i = 0; i < retornoSantos.posto.length; i++) {

                mesaSantos[i] = retornoSantos.posto[i].mesa;
                cadeiraSantos[i] = retornoSantos.posto[i].cadeira;
                idLugarDisponivel[i] = retornoSantos.posto[i].value;

                cadeirasDisponiveis[i].setAttribute("id", retornoSantos.posto[i].value);

            }
        });

        confirmarData.addEventListener("click", e => {


            fetch(`http://localhost:3000/agendamento/dia-exato/${calendario.value}`, {
                method: 'GET',
            }).then(function (response) {
                return response.json();
            }).then(function (dados) {

                if (calendario.value == "") {
                    for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                        var desabilitaCadeiras = cadeirasDisponiveis[i];
                        desabilitaCadeiras.classList.add("disabled");
                    }
                }

                if (calendario.value) {

                    for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                        var desabilitaCadeiras = cadeirasDisponiveis[i];
                        desabilitaCadeiras.classList.remove("disabled");
                    }

                    for (var i = 0; i < cadeiras.length; i++) {
                        if (!cadeiras[i].classList.contains("bloqueada")) {
                            cadeiras[i].classList.add("disponivel");
                            cadeiras[i].classList.remove("ocupada");
                        }
                    }
                    for (var i = 0; i < dados.listarAgendamentos.length; i++) {
                        if (dados.listarAgendamentos[i].unidade == idSantos) {
                            // idLugarOcupado[i] = dados.listarAgendamentos[i].posto;
                            for (var j = 0; j < cadeirasDisponiveis.length; j++) {
                                if (cadeirasDisponiveis[j].getAttribute("id") == dados.listarAgendamentos[i].posto) {
                                    cadeirasDisponiveis[j].classList.add("ocupada");
                                    cadeirasDisponiveis[j].classList.remove("disponivel");

                                }
                            }
                        }
                    }
                }
            })
        })
    }
    )
}






function clickSP() {
    sp.addEventListener("click", (e) => {


        estacaoSP.hidden = false;
        estacaoSantos.hidden = true;

        idUnidadeAtual = idSP;
        if (e.target.classList.contains("unitSP") && !e.target.classList.contains("unitSP-clicked")) {
            santos.classList.remove("unitSantos-clicked");
            e.target.classList.toggle("unitSP-clicked");
        } else {
            sp.classList.remove("unitSP-clicked")
            for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                if (cadeiras[i] && !cadeiraBloqueada) {
                    cadeiras[i].classList.add("disponivel")
                    cadeirasDisponiveis[i].classList.remove("ocupada")
                }
                var desabilitaCadeiras = cadeirasDisponiveis[i];
                desabilitaCadeiras.classList.add("disabled");

            }


        }

        if (e.target.classList.contains("unitSP-clicked") || (e.target.classList.contains("unitSantos-clicked"))) {
            calendario.classList.remove("disabled");
            confirmarData.classList.remove("disabled");

        } else {
            calendario.classList.add("disabled");
            confirmarData.classList.add("disabled");

        }


        fetch(`http://localhost:3000/unidade/posto/${idSP}`, {
            method: 'GET',
        }).then(function (response) {
            return response.json();
        }).then(function (retornoSP) {
            for (var i = 0; i < retornoSP.posto.length; i++) {

                console.log(retornoSP.posto[i].mesa);

                mesaSP[i] = retornoSP.posto[i].mesa;
                cadeiraSP[i] = retornoSP.posto[i].cadeira;
                idLugarDisponivel[i] = retornoSP.posto[i].value;
                console.log(idLugarDisponivel[i]);

                cadeirasDisponiveis[i].setAttribute("id", retornoSP.posto[i].value);
            }
        });


        confirmarData.addEventListener("click", () => {

            fetch(`http://localhost:3000/agendamento/dia-exato/${calendario.value}`, {
                method: 'GET',
            }).then(function (response) {
                return response.json();
            }).then(function (dados) {


                if (calendario.value == "") {
                    for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                        var desabilitaCadeiras = cadeirasDisponiveis[i];
                        desabilitaCadeiras.classList.add("disabled");
                    }
                }

                if (calendario.value) {

                    for (var i = 0; i < cadeirasDisponiveis.length; i++) {
                        var desabilitaCadeiras = cadeirasDisponiveis[i];
                        desabilitaCadeiras.classList.remove("disabled");
                    }


                    for (var i = 0; i < cadeiras.length; i++) {
                        if (!cadeiras[i].classList.contains("bloqueada")) {
                            cadeiras[i].classList.add("disponivel");
                            cadeiras[i].classList.remove("ocupada");
                        }
                    }
                    console.log("teste");
                    console.log(dados);
                    for (var i = 0; i < dados.listarAgendamentos.length; i++) {
                        if (dados.listarAgendamentos[i].unidade === idSP) {
                            idLugarOcupado[i] = dados.listarAgendamentos[i].posto;
                            for (var j = 0; j < cadeirasDisponiveis.length; j++) {
                                if (cadeirasDisponiveis[j].getAttribute("id") == idLugarOcupado[i]) {
                                    cadeirasDisponiveis[j].classList.remove("disponivel");
                                    cadeirasDisponiveis[j].classList.add("ocupada");
                                    console.log("oi");
                                }
                            }
                        }
                    }
                }
            })
        })
    })
}



function selecionaCadeira() {
    cadDiv.addEventListener("click", (e) => {

        if (e.target.classList.contains("disponivel") && !e.target.classList.contains("selecionada") && !e.target.classList.contains("bloqueada")) {
            cadeiraSelecionada = document.querySelector(".selecionada");
            if (cadeiraSelecionada) {
                cadeiraSelecionada.classList.remove("selecionada");
            }

            if (!e.target.classList.contains("ocupada") && !e.target.classList.contains("bloqueada")) {
                e.target.classList.toggle("selecionada");
                confirmar.classList.remove("disabled");
                cancelar.classList.remove("disabled");
            }
        }

    });
}


function clickConfirmar() {

    confirmar.addEventListener("click", (e) => {

        e.preventDefault();

        cadeiraSelecionada = document.querySelector(".selecionada");

        // var recebeID = cadeiraSelecionada.getAttribute("id", "selecionada");

        fetch('http://localhost:3000/agendamento', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId: userID, unidadeId: idUnidadeAtual, postoId: cadeiraSelecionada.id, data: calendario.value })
        }).then(function (response) {
            // console.log(JSON.stringify(dadosAgendar));
            return response.json();
        }).then(function (dados) {
            console.log(dados);
            cadeiraSelecionada = document.querySelector(".selecionada");
            cadeiraSelecionada.classList.add("ocupada");
            cadeiraSelecionada.classList.remove("disponivel");
            for (var i = 0; i < cadeiras.length; i++) {
                cadeiras[i].classList.add("disabled");
            }

            // window.location.href = "dashboard.html";
        }).catch(function (error) {
            console.log(error);
        })

    });

}

function clickCancelar() {
    cancelar.addEventListener("click", (e) => {
        cadeiraSelecionada = document.querySelector(".selecionada");
        cadeiraSelecionada.classList.remove("selecionada");


    });

}

function abreSite() {

    fetch('http://localhost:3000/unidade', {
        method: 'GET',
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        idSP = (data.unidade[0]._id);
        idSantos = (data.unidade[1]._id);

    }).catch(function (error) {
        console.log(error);
    })

}
