let idade = Number(prompt("Qual a sua idade? "))
let habilitado = prompt(`Voce tem habilitaçao? 
1 - sim
2 - não
`)

if (idade >= 18 && habilitado == true) {
    alert("Pode entrar! ")
} else {
    alert("Não pode entrar ")
}
