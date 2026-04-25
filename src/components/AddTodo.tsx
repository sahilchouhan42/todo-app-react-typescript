import { useState } from "react"


const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const handleFormSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault()
      handleAddToDo(todo)
      setTodo("")
    }
  return (
    <form onSubmit={}>
<input type="text" name="" value={todo} onChange={(e)=>setTodo(e.target.value)} />
<button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
