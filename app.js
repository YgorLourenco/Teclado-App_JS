const keyContainers = document.querySelectorAll('.keys')
let textArea = document.querySelector('.display textarea')

// Para cada tecla ativar a função
keyContainers.forEach(function(key) {
// Ao clicar na tecla vai ativar uma função de pegar o valor e imprimir
    key.addEventListener('click', function(e) {
// Se for diferente do valor, retornar
        if(!e.path[0].value) return;
// Adicionar valor em minusculo na variavel e incrementar ao colocar na variavel de area de texto do formulário
        let keyClicked = e.path[0].value.toLowerCase();
        textArea.value += keyClicked
    })
})