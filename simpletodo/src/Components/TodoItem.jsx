import React from 'react'
import styles from "./Todo.module.css"

function TodoItem({item,handleStatus,handleDelete}) {
    return (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.status?"Completed":"InComplete"}</p>
            <button onClick={()=>handleStatus(item.id)}>Status</button>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
