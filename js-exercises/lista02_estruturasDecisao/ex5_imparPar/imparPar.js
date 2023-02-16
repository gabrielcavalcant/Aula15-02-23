var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let resto = n1%2
    if(resto== 0){
    document.getElementById('result').innerHTML = `${n1} é par` 
    }else{
    document.getElementById('result').innerHTML = `${n1} é impar` 
    }
}