import './Todo.css'
import {useState} from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    // getTodos berfungsi untuk mendapatkan data state yang ada dalam todos secara real time
    // setTodos untuk memberikan nilai baru kedalam state secara real time
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat'},
        { id: 2, title: 'Sleep'},
        { id: 1, title: 'Code'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }
          
    return (
        <div>
            <h3>Todo List</h3>
            {/* Memanggil TodoCreate */}
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            {/* Memanggil component atau class yang sudah di import di atas */}
            {/* Memanggil Props  */}
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo