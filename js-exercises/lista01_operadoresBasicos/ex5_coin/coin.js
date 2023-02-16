var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let km = n1*1.609
    document.getElementById('result').innerHTML = `${km.toFixed(2)} Km`
}