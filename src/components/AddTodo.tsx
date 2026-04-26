import { useState } from "react"
import { useTodos } from "../store/store"


const AddTodo = () => {
  const {handleAddToDo} = useTodos()
    const [todo, setTodo] = useState("")
    const handleFormSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault()
      handleAddToDo(todo)
      setTodo("")
    }
  return (
    <form onSubmit={handleFormSubmit}>
<input type="text" name="" value={todo} onChange={(e)=>setTodo(e.target.value)} />
<button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
