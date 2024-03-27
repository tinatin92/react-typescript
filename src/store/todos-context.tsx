import React, { useState } from "react";
import Todo from "../models/todo";
import { createContext } from "react";

type TodoContextOblect = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextOblect>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});



const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeItemHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextOblect = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {" "}
      {props.children}{" "}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider
