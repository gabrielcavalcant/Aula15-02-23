var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    if(n1>n2){
        document.getElementById('result').innerHTML = `${n1} é maior que ${n2}`
    }else{
        document.getElementById('result').innerHTML = `${n2} é maior que ${n1}`
    }
}