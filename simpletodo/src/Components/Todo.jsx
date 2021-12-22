import React from 'react'
import TodoList from './TodoList'
import styles from "./Todo.module.css"
import {v4 as uuid} from "uuid"

function Todo() {
    const [title, setTitle]=React.useState("")
    const [todo, setTodo]= React.useState([])

    const handleAdd=(title)=>{
        const payload={
            title,
            status:false,
            complete:false,

            id:uuid()
        }
        setTodo([...todo, payload])
    }
   
    return (
        <div className={styles.maindiv}>
                <input placeholder="Add Task here" value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
                <button onClick={()=> handleAdd(title)}>Add</button>
                <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default Todo
