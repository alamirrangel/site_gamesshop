const form = document.getElementById('form-tarefa');
const tarefas = []
const spanCadastrado = '<span class="tarefa cadastrada">Cadastrada</span>';
const spanNaoCadastrado = '<span class="tarefa nao cadastrada">Cadastrada</span>';

let linhas='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNovaTarefa = document.getElementById('nova-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    if (tarefas.includes(inputNovaTarefa.value)) {
        alert(`A tarefa: ${inputNovaTarefa.value} já foi cadastrada`);        
    } else {    
        tarefas.push(inputNovaTarefa.value);

        let linha='<tr>';
        linha += `<td class="tarefa">${inputNovaTarefa.value}</td>`;
        linha += '</tr>';

        listaTarefas.innerHTML += linha;

        const tarefasElements = document.querySelectorAll('.tarefa');
        tarefasElements.forEach(tarefaElement => {
            tarefaElement.addEventListener('click', function() {
                this.classList.toggle('tarefa-completada');
            });
        
        });
    }
    
    inputNovaTarefa.value='';
}

