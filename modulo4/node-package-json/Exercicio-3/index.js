// Exercicio 3

const listaDeTarefas = ["Lavar a louça"]
const tarefa = process.argv[2]

const adicionaNovaTarefaALista = () => {
    listaDeTarefas.push(tarefa)
    return listaDeTarefas
}

console.log(adicionaNovaTarefaALista())