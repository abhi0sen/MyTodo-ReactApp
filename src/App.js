import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React, { useState, useEffect } from 'react';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  
  const addTodo = (title, desc) =>{
    let sno;
    if (todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc
  }

  setTodos([...todos, myTodo]);
  console.log(myTodo);

  
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const onDelete = (todo) =>{
    console.log("I am deleted", todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <div>
      <Navbar title = "MyTodoList" searchBar={false }/>

      <AddTodo addTodo = {addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>


        <About />

      <Footer />
    </div>
  );
}

export default App;
