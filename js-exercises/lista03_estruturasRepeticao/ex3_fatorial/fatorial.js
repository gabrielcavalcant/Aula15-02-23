var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number.parseInt(Number(document.getElementById('n1').value))
    let resultado = 'Resultado: '
    let fat = 1
    for(var i = 1; i <= n1; i++){
       fat = (fat * i)
    }
    resultado = resultado + fat
    document.getElementById('result').innerHTML = resultado
}