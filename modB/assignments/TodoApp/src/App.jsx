import { useState } from 'react'

import './App.css'

function App() {
  let [todoList,setTodoList]=useState([])
  let saveTodoList=(event)=>{
    
    let todoName=event.target.todoName.value;
    if(!todoList.includes(todoName)){
      let finalDoList=[...todoList,todoName];
      setTodoList(finalDoList)
      event.target.todoName.value=""
    }
    else{
      alert("task already exist in todo list")
    }
    event.preventDefault();
  }

let list=todoList.map((value,index)=>{
  return(
    <TodoListItem value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>
  )
})
  return (
    <>
    <div className="App">

    <h1>
      Todo App
    </h1>
    <form onSubmit={saveTodoList}>
      <input type="text" name='todoName'></input><button>Save</button>
    </form>
    <div className="outer">
      <ul>
        {list}
      </ul>
    </div>
    </div>
      
    </>
  )
}

export default App

function TodoListItem({value,indexNumber,todoList,setTodoList}){
  let deleteIt=()=>{
    let finalData=todoList.filter((v,i)=>i!=indexNumber)
      setTodoList(finalData)
      
  } 
  
return (
<li> {value} <span onClick={deleteIt}>&times;</span> </li>)
}


