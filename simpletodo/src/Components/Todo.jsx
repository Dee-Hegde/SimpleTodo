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
            id:uuid()
        }
        setTodo([...todo, payload])
    }
   
    return (
        <div className={styles.maindiv}>
            <TodoList todo={todo} setTodo={setTodo}/>
            <div className={styles.input}>
                <input placeholder="Add Task here" value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
                <button onClick={()=> handleAdd(title)}>Add</button>
            </div>
            
        </div>
    )
}

export default Todo
