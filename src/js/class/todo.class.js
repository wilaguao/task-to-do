export class ToDo {

    //ESto es para recuperar la instancia del objeto.
    static fromJson = ({ id, tarea, completado, creado }) => {
        const tempToDo = new ToDo(tarea)

        tempToDo.id = id
        tempToDo.completado = completado
        tempToDo.creado = creado

        return tempToDo
    }

    constructor(tarea) {
        this.tarea = tarea
        this.id = new Date().getTime(); // 12814131331
        this.completado = false;
        this.creado = new Date();
    }

    imprimirTodo = () => {
        console.log(this.tarea, this.id)
    }
}