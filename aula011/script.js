let btnSoma = document.querySelector("#btnSoma")
let primeiroinput = document.querySelector("#primeiroNumero")
let segundoinput = document.querySelector("#segundoNumero")

function soma() {
    let resultado = Number(primeiroinput.value) + Number(segundoinput.value)
    alert(resultado)
}

btnSoma.addEventListener ("click", soma)