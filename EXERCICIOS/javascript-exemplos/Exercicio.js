function validaIdade(textBox) {
    let boxValue = parseFloat(textBox.value);     
    if ( isNaN(boxValue) || (boxValue % 1 != 0) ) {
        alert("Você deve digitar um número inteiro!");    
        textBox.value = "";
		return false;
    }
    else if (  boxValue<10 || boxValue>90 ) {
        alert('Você deve digitar um numero entre 10 e 90!')
        return false
    }     
	return true;
}

function validaEmail(textBox) {
    let boxValue = textBox.value
    if(boxValue.search('@') == -1){
        alert('Deve ser um e-mail válido!')
        return false
    }
    else
        return true
}

function validaCheckbox(){
    boxes = document.forms['formCheckbox'].linguagens.length
    console.log(boxes)
    if (boxes > 3) {
        alert('Deve ser selecionado no máximo 3 opções!')
        return false
    }
    else
        return true
}

function chamar() {
    if (validaCheckbox()){
        campoNome = document.getElementById('name').value
        campoIdade = document.getElementById('age').value
        campoEmail = document.getElementById('email').value
        console.log(campoNome, campoIdade, campoEmail)
    }
    else
        console.log('Isso')
}