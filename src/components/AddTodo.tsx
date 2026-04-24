import { useState } from "react"


const AddTodo = () => {
    const [todo, setTodo] = useState("")
  return (
    <form >
<input type="text" name="" value={todo} onChange={(e)=>setTodo(e.target.value)} />
<button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
