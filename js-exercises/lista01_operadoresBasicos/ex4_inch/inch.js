var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let pol = n1/25.4
    document.getElementById('result').innerHTML = `${pol.toFixed(3)}"`
}