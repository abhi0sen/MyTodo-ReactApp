import React, {useState} from "react";

const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const submit =(e) => {
        e.preventDefault();
        if(!Title || !Desc){
            alert("Title or Description can not be blank")
        }
        else{
        props.addTodo(Title, Desc)
        setTitle("")
        setDesc("");
    }
    }
  return (
    <div className="container">
        <h3 className="text-center">Add a Task Today</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={Title} onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={Desc} onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
