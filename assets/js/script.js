var btnSubtrair = document.querySelector("#subtrair");
var btnAdicionar = document.querySelector("#adicionar");
var numeroMostrar = document.querySelector("#numero-incrementado");

var contagem = 0;

btnSubtrair.addEventListener("click", (e) => {
  e.preventDefault();
  if (contagem >= 1) {
    btnSubtrair.disabled = false;
    contagem--;
    numeroMostrar.innerHTML = contagem;
  }if(contagem === 0 ){
    btnSubtrair.disabled = true;
  }
});

btnAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  if (contagem >= 0) {
    btnSubtrair.disabled = false;
    contagem++;
    numeroMostrar.innerHTML = contagem;
  }
});
