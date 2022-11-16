//Importaciones
import { ToDo } from '../js/class'
import { toDoList } from '../index'

//Referencias HTML
const divToDoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnBorrar = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters')
const anchorFiltro = document.querySelectorAll('.filtro')

export const crearToDoHtml = (ToDo) => {
    const htmlToDo = `
    <li class="${ToDo.completado ? 'completed' : ''} " data-id="${ToDo.id}" data->
        <div class="view">
            <input class="toggle" type="checkbox" ${ToDo.completado ? 'checked' : ''}>
            <label>${ToDo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div')
    div.innerHTML = htmlToDo
    divToDoList.append(div.firstElementChild)
    return div.firstElementChild
}

//Eventos

txtInput.addEventListener('keyup', (event) => {
    const { keyCode } = event
    if (keyCode === 13 && txtInput.value.trim().length > 0) {
        const nuevoToDo = new ToDo(txtInput.value.trim())
        toDoList.nuevoToDo(nuevoToDo)
        crearToDoHtml(nuevoToDo)
        txtInput.value = ''
    }
})

divToDoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName
    const toDoElement = event.target.parentElement.parentElement
    const toDoId = Number(toDoElement.dataset.id)

    if (nombreElemento.includes('input')) {
        toDoList.marcadoCompletado(toDoId)
        toDoElement.classList.toggle('completed')
    } else if (nombreElemento.includes('button')) {
        toDoList.eliminarToDo(toDoId)
        divToDoList.removeChild(toDoElement)
    }

});

btnBorrar.addEventListener('click', () => {
    toDoList.eliminarCompletados()
    document.querySelectorAll('.completed').forEach(x => divToDoList.removeChild(x))
})

ulFiltros.addEventListener('click', (evento) => {
    const filtro = evento.target.text
    if (!filtro) return

    anchorFiltro.forEach(x => x.classList.remove('selected'))
    evento.target.classList.add('selected')

    for (const x of divToDoList.children) {
        x.classList.remove('hidden')
        const completado = x.classList.contains('completed')

        switch (filtro) {
            case 'Pendientes':
                if (completado) x.classList.add('hidden')
                break;
            case 'Completados':
                if (!completado) x.classList.add('hidden')
                break;
            default:
                break;
        }
    }

})