import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import auth from './Config/Firebase';

const App=()=> {
const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [loginEmail,setLoginEmail]=useState("");
 const [loginPassword,setLoginPassword]=useState("");

 


const signup=(e)=>{
  e.preventDefault();
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
let loginSign=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"login successful")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


  return (
    <>
       <h1>Sign up</h1>
       <form onSubmit={signup}>
        <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='enter name'/>
        <br />
        <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter email'/>
        <br />
        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='enter passwprd'/>
        <br />
        <button>Submit</button>
       </form>

       <h2>login</h2>
       <form onSubmit={loginSign}>
        
        <input onChange={(e)=>setLoginEmail(e.target.value)} type='email' placeholder='enter email'/>
        <br />
        <input onChange={(e)=>setLoginPassword(e.target.value)} type='password' placeholder='enter passwprd'/>
        <br />
        <button>Submit</button>
       </form>

    </>
  )
}

export default App
