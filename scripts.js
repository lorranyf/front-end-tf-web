function mostrarPagina(idPagina) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    const paginaSelecionada = document.getElementById(idPagina);
    paginaSelecionada.classList.add('ativa');
}

function fazerLogin(event) {
    event.preventDefault();
    alert('Login realizado com sucesso!');
    mostrarPagina('painel');
}

function marcarComoConcluida(botao) {
    const tarefa = botao.parentElement;
    tarefa.style.textDecoration = 'line-through';
    botao.remove();
}

function verTarefa(dia) {
    const tarefas = {
        12: 'Tarefa 1 - Maria',
        15: 'Tarefa 2 - João',
        20: null
    };

    if (tarefas[dia]) {
        alert(`Tarefa para o dia ${dia}: ${tarefas[dia]}`);
    } else {
        alert('Sem tarefas para este dia.');
    }
}

function adicionarItem(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeItem').value;
    const preco = document.getElementById('precoItem').value;

    if (nome && preco) {
        const lista = document.getElementById('listaCompras');
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `${nome} - R$${preco} <button onclick="removerItem(this)">Remover</button>`;
        lista.appendChild(novoItem);

        mostrarPagina('compras');
    }
}

function removerItem(botao) {
    botao.parentElement.remove();
}
