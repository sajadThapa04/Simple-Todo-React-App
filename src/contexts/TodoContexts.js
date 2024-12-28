import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    removeTodo: (id) => { },
    toggleTodo: (id) => { },
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;


