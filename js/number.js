let valor = document.querySelector('input#numero');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res');
let arrayNumber = [];


function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){

    if(isNumero(valor.value) && !inLista(valor.value,arrayNumber)){
        window.alert('Valor adicionado')
        arrayNumber.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já foi adicionado na lista')
    }
   
}