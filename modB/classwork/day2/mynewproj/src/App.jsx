import { useState } from 'react'
import './App.css'
import Input from './Components/Input/Input'
import Table from 'react-bootstrap/Table';
function App() {
//  let[name,setName]=useState("")
//  let[email,setEmail]=useState("")
//  let[city,setCity]=useState("")
 let[register,setRegister]=useState({
  name:"",
  email:"",
  city:"",
  fullName:"",
  age:0
 })
  
  // const getVal=()=>{
  //   console.log(...register,register)
  // };
  const [records,setRecords]=useState([]);
  const handleSubmit=()=>{
    setRecords([...records,register])

    setRegister({
  name:"",
  email:"",
  city:"",
  fullName:"",
  age:0
 })

  };
  // console.log(records)
  
  return (
    <>
      <h1>App</h1>
      {/* <input onChange={(e)=>{setName(e.target.value)}} type="text" /> */}
      <br />
      <Input valueKey={register.name} textValue={(e)=>{setRegister({...register,name:e.target.value})}} label="enter name"/>
      <Input valueKey={register.email} textValue={(e)=>{setRegister({...register,email:e.target.value})}} label="enter email"/>
      <Input valueKey={register.city} textValue={(e)=>{setRegister({...register,city:e.target.value})}} label="enter city"/>
      <Input valueKey={register.fullName} textValue={(e)=>{setRegister({...register,fullName:e.target.value})}} label="enter fullname"/> 
      <Input valueKey={register.age} textValue={(e)=>{setRegister({...register,age:e.target.value})}} label="enter age"/>
      <button onClick={handleSubmit}>submit</button>
      


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>email</th>
          <th>city</th>
          <th>fullName</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
      {
        records.map((e,i)=>{
          return (
            <tr key={i}>
              <td>{i}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.city}</td>
              <td>{e.fullName}</td>
              <td>{e.age}</td>

            </tr>
          )
        })
      }
      </tbody>
    </Table>



    </>
  )
}

export default App
