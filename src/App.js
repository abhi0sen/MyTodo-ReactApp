import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/About';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) =>{
    console.log("I am deleted", todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  // let initTodo;
  // if(localStorage.getItem("todos")===null){
  //   initTodo=[];
  // }
  // else{
  //   initTodo=JSON.parse(localStorage.getItem("todos"));
  // }
  
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
  }    


  // updating the code with newer values
  const [todos, setTodos] = useState(initTodo);

  // Saving the data in the localstorage to be saved even after Reloading the page
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div>
      <Router>
      <Navbar title = "MyTodoList" searchBar={false }/>

      <Routes>

        <Route path='/' element = {

            <>
            <AddTodo addTodo = {addTodo} />
            <Todos todos={todos} onDelete={onDelete}/>
            </>
        }/>
      <Route path='/about-me/' element={<About title="Mytodo" />} />

      </Routes>
    
      <Footer title="Mytodo" />
      </Router>
    </div>
  );
}

export default App;
