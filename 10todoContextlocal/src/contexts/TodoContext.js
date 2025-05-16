import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo: " Todo Message",
            completed: false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})


export const TodoProvider = Todocontext.Provider


export const useTodo = () => {

    return useContext(Todocontext)

}