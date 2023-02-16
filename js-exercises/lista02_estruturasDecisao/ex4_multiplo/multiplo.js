var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let resto = n1%n2
    if(resto>0){
    document.getElementById('result').innerHTML = `${n1} não é multiplo de ${n2}` 
    }else{
    document.getElementById('result').innerHTML = `${n1} é multiplo de ${n2}` 
    }
}