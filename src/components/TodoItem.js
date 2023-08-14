import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>  
      {/* When we provide an argument to the function then we need to call that function inside an arrow function. */}
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
    </div>
  )
}

export default TodoItem;
