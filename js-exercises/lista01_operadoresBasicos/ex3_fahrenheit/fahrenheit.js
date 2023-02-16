var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let fahrenheit = (n1*9/5) + 32
    document.getElementById('result').innerHTML = fahrenheit
}