// Funções
// Função declarativa
function saudacao(){
    console.log("Olá")
}

saudacao() // Executando/chamando a função

// Função com parâmetro e retorno
function dobrar(numero) {
    return numero * 2
}
let resultado = dobrar(5)
console.log(resultado)

// Função anônima
let mostrarMensagem = function() {
    console.log("Função anônima")
}
mostrarMensagem()

// Arrow function   
const somar = (a, b) => {
    return a + b
}
console.log(somar(3, 7))

//---------------------------------------
// Manipulação do DOM
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "Texto Alterado"
//Modificando estilo CSS
let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontSize = "30px"
// Criando um elemento no HTML
let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)
// Apagar um elemento no HTML
let apagar = document.getElementById("apagar")
apagar.remove()
//---------------------------------------

// Eventos DOM
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("Você clicou no botão")
})

function mostrarNome() {
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Você digitou: " + nome
}

function mudarCor() {
document.getElementById("caixa").style.backgroundColor = "blue"
document.getElementById("caixa") .innerText = "Passou o mouse"
}

function corOriginal() {
document.getElementById("caixa").style.backgroundColor = "red"
document.getElementById("caixa").innerText = "passe o mouse aqui"
}


