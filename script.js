let num = window.document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#cad')
let valores = []

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let value1 = generateRandomInteger(255);
let value2 = generateRandomInteger(255);
let value3 = generateRandomInteger(255);
let value4 = generateRandomInteger(255);

let cor = window.document.querySelector('#body')
function mudarCor() {
    let value1 = generateRandomInteger(255);
    let value2 = generateRandomInteger(255);
    let value3 = generateRandomInteger(255);
    cor.style.cssText = 
    `background-color: rgb(${value1}, ${value2}, ${value3});`;
}


function isNumber(num) {
    if (num.value >= 1 && num.value <= 100 ){
        return true
    } else {
        return false
    }
}

function inLista(num) {
    if (valores.indexOf(Number(num.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumber(num) && !inLista(num)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado ${num.value}`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }   

    num.value = ''
    
    num.focus()

}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione algo na lista!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (var t = 0; t < total; t++ ) {
            soma += valores[t]
            if (valores[t] > maior ) {
                maior = valores[t]
            } 

            if (valores[t] < menor) {
                menor = valores[t]
            }
        }
        
        let media = soma / valores.length
        let medias = media + ''
        medias.replace(".", ",")
        
        res.innerHTML = `O total de números na lista é ${total}.`
        res.innerHTML += `<br>O menor número na lista é ${menor}.`
        res.innerHTML += `<br>O maior número na lista é ${maior}.`
        res.innerHTML += `<br>A soma de número na lista é ${soma}.`
        res.innerHTML += `<br>A média dos números na lista é ${
            medias.replace(".", ",")}.`
        
    }
    valores = []

}