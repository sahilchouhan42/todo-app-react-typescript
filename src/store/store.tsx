import { createContext, useContext, useState, type ReactNode } from "react";


export const todosContext = createContext<TodosContext | null>(null)

export type TodosProviderProps = {
    children: ReactNode
}




export type Todo={
    id:string;
    task:string;
    completed: boolean;
    createdAt: Date
}

export type TodosContext = {
    todos:Todo[];
    handleAddToDo:(task:string)=>void
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
const [todos, setTodos] = useState<Todo[]>([])
const handleAddToDo = (task: string)=>{
    setTodos((prev)=>{
        const newTodos:Todo[]=[
            {
                id: Math.random().toString(),
                task:task,
                completed: false,
                createdAt: new Date()
            },
            ...prev
        ]
        console.log('my prev'+ prev)
        console.log(newTodos)
        return newTodos
    })
}


    return <todosContext.Provider value={{todos,handleAddToDo }}>
        {children}
    </todosContext.Provider>
}

//consumer

export const useTodos = ()=>{
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outsideof Provider")
    }
    return todosConsumer
}