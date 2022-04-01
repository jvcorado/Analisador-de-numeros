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
        window.alert('Valor adicionado');
        arrayNumber.push(Number(valor.value));
        let item = document.createElement('option');
        item.text = `Valor ${valor.value} adicionado`;
        lista.appendChild(item);
        
    }else{
        window.alert('Valor inválido ou já foi adicionado na lista');
        res.innerHTML = ''
    }
    valor.value = '';
    valor.focus();
   
}

function finalizar(){
    if(arrayNumber.length == 0){
        window.alert('Adicione um valor para poder finalizar.');
    }else{
        let tot = arrayNumber.length;
        let maior = arrayNumber[0];
        let menor = arrayNumber[0];

        for (let pos in arrayNumber) {
            if (arrayNumber[pos] > maior) {
                maior = arrayNumber[pos]; 
            }
            if(arrayNumber[pos] < menor){
                menor = arrayNumber[pos]
            }
        }

        res.innerHTML = '';
        res.innerHTML += `<p class = "text-center">Foram adicionados ${tot} item na lista.</p>`;
        res.innerHTML += `<p class = "text-center">  Maior valor encontrado na lista ${maior}. </p>`;
        res.innerHTML += `<p class = "text-center"> Menor valor encontrado na lista ${menor}. </p>`;
    }
}