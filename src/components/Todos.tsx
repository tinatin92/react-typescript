import React ,{useContext}from "react";

import TodoItem from './TodoItem'
import classes from './Todo.module.css'
import { TodosContext } from "../store/todos-context";

const Todos:React.FC = () => {
    
 const todoCtx = useContext(TodosContext)

  return <ul className={classes.todos}>
    {todoCtx.items.map((item) => (
        <TodoItem onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text} />
    ))}
    </ul>;
}

export default Todos
