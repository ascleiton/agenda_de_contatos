const form = document.getElementById('form-atividade')
const contatos = []

let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaContato()
    listaContatos()
    contagemDeContatos()
})

function adicionaContato(){
    let nomeContato = document.getElementById('nomeContato')
    let numeroContato = document.getElementById('numeroContato')
    contatos.push(nomeContato.value)

    let linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += '</tr>'

    linhas += linha

    nomeContato.value = ''
    numeroContato.value = ''
}

function listaContatos() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function contagemDeContatos(){
    const tfoot = document.getElementById('total-contatos')
    tfoot.innerHTML = contatos.length
}