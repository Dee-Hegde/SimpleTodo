import React from 'react'
import styles from "./Todo.module.css"

function TodoItem({item,handleStatus,handleDelete}) {
    return (
        <div className={styles.item} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.status?"Completed":"InComplete"}</p>
            <button className={item.status? styles.status:styles.delete} onClick={()=>handleStatus(item.id)}>Status</button>
            <button className={styles.delete} onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
