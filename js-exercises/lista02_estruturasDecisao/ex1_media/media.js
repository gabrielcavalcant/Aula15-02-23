var calc = document.getElementById('btnCalcular')
calc.addEventListener('click',CalcMed)

function CalcMed(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let media = (n1+n2)/2
    if(media>=5){
    document.getElementById('result').innerHTML = `${media.toFixed(2)} Aprovado`
    }else{
        document.getElementById('result').innerHTML = `${media.toFixed(2)} - Reprovado`
    }
}