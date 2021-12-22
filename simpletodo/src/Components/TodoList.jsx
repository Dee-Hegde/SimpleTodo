import React from 'react'
import styles from "./Todo.module.css"
import TodoItem from './TodoItem'

function TodoList({todo,setTodo}) {
   const todo1=todo.filter(item=>!item.status && !item.complete);
   const incomplete= todo.filter(item=>!item.complete && item.status)
   const completed1= todo.filter(item=>item.complete)

   const handleTodo=(id)=>{
      const updatedtodo=todo.map(item=>id===item.id? {...item, complete:!item.complete, status:!item.status }:item)
      setTodo(updatedtodo)
   }
    const handleStatus=(id)=>{
        const change=todo.map(item=>id===item.id? {...item, status:!item.status}:item)
        setTodo(change)
     }
     const handleDelete=(id)=>{
         const deleted =todo.filter(item=> item.id !== id)
         setTodo(deleted)
     }

    
    return (
        <div >
          <h2>Task Board:</h2>
          <div className={styles.flexdiv}>
               <div className={styles.marginleft}>
               <h2>Todo List:</h2>
                  {todo1.map(item=><TodoItem 
                  item={item}
                   handleDelete={handleDelete}
                   handleTodo={handleTodo} 
                   handleStatus={handleStatus}/>)}
               </div>
               <div className={styles.marginleft}>
               <h2>In Progress:</h2>
                  {incomplete.map(item=><TodoItem 
                  item={item}
                  handleDelete={handleDelete}
                  handleTodo={handleTodo}
                  handleStatus={handleStatus}/>)}
               </div>
               <div className={styles.marginleft}>
               <h2>Completed:</h2>
                  {completed1.map(item=><TodoItem 
                  item={item} 
                  handleDelete={handleDelete} 
                  handleTodo={handleTodo}
                   handleStatus={handleStatus}/>)}
               </div>
          </div>
        </div>
    )
}

export default TodoList
