const quadrado = document.querySelector(".square");
const rectangle = document.querySelector(".rectangle");
const quadradoSelecionado = document.querySelector(".square.selected");


rectangle.addEventListener("click", (e) =>{
    if (e.target.classList.contains("square") && !e.target.classList.contains("occupied")) {
      const quadradoSelecionado = document.querySelector(".selected");
      if (quadradoSelecionado) {
        quadradoSelecionado.classList.remove("selected");
      }
        e.target.classList.toggle("selected");
    }
});
