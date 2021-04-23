import React from 'react'
import styles from "./Todo.module.css"
import TodoItem from './TodoItem'

function TodoList({todo,setTodo}) {
    const handleStatus=(id)=>{
        const change=todo.map(item=>id===item.id? {...item, status:!item.status}:item)
        setTodo(change)
     }
     const handleDelete=(id)=>{
         const deleted =todo.filter(item=> item.id !== id)
         setTodo(deleted)
     }
    
    return (
        <div>
          <h2>Task Board:</h2>
             <div className={styles.list}>
                {todo.map(item=><TodoItem item={item} handleDelete={handleDelete} handleStatus={handleStatus}/>)}

             </div>
       
        </div>
    )
}

export default TodoList
