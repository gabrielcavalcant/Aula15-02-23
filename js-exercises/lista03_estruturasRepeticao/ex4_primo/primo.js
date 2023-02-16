var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number.parseInt(Number(document.getElementById('n1').value))
    let resultado = 'Resultado: '
    let primo = "Este número é Primo"
   
    for(var i = 2; i < n1; i++){
       let rest = (n1 % i)
        if(rest === 0){
            primo = "Este número não é Primo"
            break;
        }
    }
    resultado = resultado + primo
    document.getElementById('result').innerHTML = resultado
}