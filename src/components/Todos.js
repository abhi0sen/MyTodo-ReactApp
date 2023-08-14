import React from 'react';
import TodoItem from './TodoItem';

// import { Container } from 'react-bootstrap/Container'

const Todos = (props) => {
  return (
    // <Container>
    <div className="container">
      <h3 className='text-center'>ToDo List</h3>
      {props.todos.length===0? "No task for now!!": 
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
        
    </div>
    // </Container>
  )
}

export default Todos;
