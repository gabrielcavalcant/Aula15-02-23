var soma = document.getElementById('btnSomar')
soma.addEventListener('click',somar)

var sub = document.getElementById('btnSub')
sub.addEventListener('click',subtrair)

var mult = document.getElementById('btnMult')
mult.addEventListener('click',multiplicacao)

var div = document.getElementById('btnDiv')
div.addEventListener('click',divisao)

function somar(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let somar = n1 + n2
    document.getElementById('result').innerHTML = somar
}
function subtrair(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    subtrair = n1 - n2
    document.getElementById('result').innerHTML = subtrair
}
function multiplicacao(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    multiplicacao = n1 * n2
    document.getElementById('result').innerHTML = multiplicacao
}
function divisao(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    divisao = n1/n2
    document.getElementById('result').innerHTML = divisao
}