import { ToDo } from './todo.class.js'

export class ToDoList {

    constructor() {
        //this.toDos = []
        this.cargarLocalStorage()
    }

    nuevoToDo = (toDo) => {
        this.toDos.push(toDo)
        this.guardarLocalStorage()
    }

    eliminarToDo = (id) => {
        this.toDos = this.toDos.filter(x => x.id != id)
        this.guardarLocalStorage()
    }

    marcadoCompletado = (id) => {
        for (const ToDo of this.toDos) {
            if (ToDo.id == id) {
                ToDo.completado = !ToDo.completado
                this.guardarLocalStorage()
                break
            }
        }
    }

    eliminarCompletados = () => {
        this.toDos = this.toDos.filter(x => !x.completado)
        this.guardarLocalStorage()
    }

    guardarLocalStorage = () => localStorage.setItem('toDo', JSON.stringify(this.toDos))

    cargarLocalStorage = () => {
        this.toDos = localStorage.getItem('toDo') ? JSON.parse(localStorage.getItem('toDo')) : []
            //ESto es para recuperar la instancia del objeto.
        this.toDos = this.toDos.map(ToDo.fromJson)
    }


}