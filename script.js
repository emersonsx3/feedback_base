let botoes = document.querySelectorAll(".botoes button")
botoes.forEath(botao => {
    botao.addEventiist("click", guardarNota)
})

function guardarNota(evento){
    let nota = evento.targert.innerText
    localStorage.setItem("nota", nota)
}