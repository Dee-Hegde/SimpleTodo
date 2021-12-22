import React from 'react'
import styles from "./Todo.module.css"

function TodoItem({item,handleStatus,handleDelete,handleTodo}) {
    return (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{(item.complete?"Completed":(!item.status?"Todo ":"Inprogress"))}</p>
            <button className={styles.button} disabled={item.complete} onClick={()=>handleStatus(item.id)}>Status</button>
            <button className={styles.button} onClick={()=>handleTodo(item.id)}>{!item.complete ? "Mark Completed":"Mark Incomplete"}</button>
            <button className={styles.button} onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
