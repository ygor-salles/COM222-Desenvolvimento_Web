//Usando scripts de exercicio passado

function validaIdade(textBox) {
    let boxValue = parseFloat(textBox.value);
    if (isNaN(boxValue) || (boxValue % 1 != 0)) {
        alert("Você deve digitar um número inteiro!");
        textBox.value = "";
        return false;
    }
    else if (boxValue < 10 || boxValue > 90) {
        alert('Você deve digitar um numero inteiro entre 10 e 90!')
        textBox.value = ''
        return false
    }
    return true;
}

function validaEmail(textBox) {
    let boxValue = textBox.value
    if (boxValue.search('@') == -1) {
        alert('Deve ser um e-mail válido!')
        textBox.value = ''
        return false
    }
    else
        return true
}

function validaCheckbox() {
    quantidade = document.forms['formCheckbox'].linguagens.length
    var selecionados = 0
    for (let i = 0; i < quantidade; i++) {
        if (document.forms['formCheckbox'].linguagens[i].checked)
            selecionados += 1
        if (selecionados > 3) {
            alert('Deve ser selecionado no máximo 3 opções de Linguagens!')
            document.forms['formCheckbox'].linguagens[i].checked = false
            return false
        }
    }
    return true
}

function frequenciaSelecionada() {
    const quantidade = document.getElementsByName('notify').length
    let notify = document.getElementsByName('notify')
    for (let i = 0; i < quantidade; i++)
        if (notify[i].checked)
            return notify[i].value
}

function chamar(event) {
    campoNome = document.getElementById('name')
    campoIdade = document.getElementById('age')
    campoEmail = document.getElementById('email')

    if (campoNome.value != '' && campoIdade.value != '' && campoEmail.value != '') 
        alert('Formulário enviado com sucesso!')
    else{
        event.preventDefault() //esse método serve previni para que não navegue para próxima pagina
        alert('Todos os campos devem ser preenchidos')
    }
}