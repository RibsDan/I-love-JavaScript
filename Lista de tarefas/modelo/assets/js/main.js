let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let lista = document.querySelector('.tarefas');

function criaLi() {
    let li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    let li = criaLi();
    li.innerText = textoInput;
    lista.appendChild(li)
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});