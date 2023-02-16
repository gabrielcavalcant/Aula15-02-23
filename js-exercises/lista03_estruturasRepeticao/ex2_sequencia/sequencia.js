var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number.parseInt(Number(document.getElementById('n1').value))
    let n2 = Number.parseInt(Number(document.getElementById('n2').value))
    let resultado = 'Resultado: '
    while(n1>n2){
        resultado += n1 + ', '
        n1--
    }
    document.getElementById('result').innerHTML = resultado

    while(n1<n2){
        resultado += n1 + ', '
        n1++
    }
    document.getElementById('result').innerHTML = resultado
}