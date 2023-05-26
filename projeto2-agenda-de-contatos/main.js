const form = document.getElementById('form-contato');
const imgAdicionado = '<img src="./imagens/adicionado.png" alt="Sinalização de confirmção" />';
const imgNaoAdicionado = '<img src=".imagens/naoadicionado.png" alt="Sinalização de não confirmação" />';
const contatos = [];
const numerosContatos = [];
const spanAdicionado = '<span class="contato adicionado">Adicionado</span>';
const spanNaoAdicionado = '<span class="contato nao adicionado">Nao Adicionado</span>';

let linhas='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContatosAdicionados();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato'); 

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi adicionado`);        
    } else {    
        contatos.push(inputNomeContato.value);
        numerosContatos.push(parseFloat(inputNumeroContato.value));

        let linha='<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value = inputNumeroContato ? imgAdicionado : imgNaoAdicionado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeContato.value='';
    inputNumeroContato.value='';    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatosAdicionados () {
    const contatosAdicionados = contatos.length;
    document.getElementById('contatos-adicionados-quantidade').innerHTML = contatosAdicionados;    
}

function calculaContatosAdicionados() {
    let somaDosContatos = 0;

    for (let i = 0; i < contatos.length; i++) {
        somaDosContatos += contatos[i];
    }

    return somaDosContatos / contatos.length;
}