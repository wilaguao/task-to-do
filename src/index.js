import './styles.css'
import { ToDo, ToDoList } from './js/class'
import { crearToDoHtml } from './js/componentes'

export const toDoList = new ToDoList()

// si se va a enviar de argumento el mismo item del foreach se puede simplificar
// se puede hacer siempre y cuando el arrow del foreach solo devuelve un argumento.
toDoList.toDos.forEach(crearToDoHtml)