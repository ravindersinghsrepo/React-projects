import React, { useState } from "react";
import ReactDOM from 'react-dom/client'

// Todo App heading 
// search input box with go button 
// todos with edit and delete functionality

function TodoApp(){
    const[searchtext,setText] = useState("");
    const [todos,setTodos] = useState([]);
    const [editModeId, setEditMode] = useState(0);

    function createTodo(e){
        e.preventDefault()

        if(editModeId){
            const updatedList = todos.map((todo)=>{
                todo.text = todo.id==editModeId?searchtext : todo.text;
                return todo;
            })
            setTodos(updatedList);
            setText('')
            return
        }
        
        if(searchtext!==''){
            setTodos([ {text:searchtext , id:`${searchtext}-${Date.now()}`}  ,
                
                ...todos]);
            setText('')
        }
    }
    const handleDelete = (id)=>{
        const filteredList = todos.filter((todo)=>todo.id!==id);
        setTodos(filteredList);
    }
   
    const handleEdit=(id) =>{
        const editedText = todos.find((todo)=>todo.id===id).text;
        setText(editedText);
        setEditMode(id);
    }

    return(
        <div className="app-container">
            <div className="app">
                <h1>Todo List App</h1>
                
                <form className="search" onSubmit={createTodo}>

                <input type="text" placeholder="Enter text" className="todotext" 
                value={searchtext}
                onChange={(e)=>{setText(e.target.value)
                }}
                />   
                <button type="submit">{editModeId==0?"Go":"Change"}</button>

                </form>

                <div className="todos">

                    <ul>
                        {
                            todos.map(todo=>
                            {
                             return(
                            <li key={todo.id}>{todo.text}
                            
                            <button type="submit" onClick={()=>{handleEdit(todo.id)}}>Edit</button>
                            
                            <button type="submit"  
                            onClick={()=>{handleDelete(todo.id)}}
                            >Delete</    button>
                            
                            </li>
                            )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </div> 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TodoApp/>)


