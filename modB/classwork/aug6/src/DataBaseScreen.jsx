import React, { useEffect, useState } from "react";
import { doc, setDoc, collection, addDoc,getDocs,updateDoc,deleteDoc } from "firebase/firestore";
import { db } from './Config/Firebase';

const DatabaseScreen = () => {
    const [name,setName]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");

     useEffect(()=>{

     },[]);
     const getData=async()=>{
        const getData=await getDocs(collection(db,"users"))
        getData.forEach((e,i)=>{
            console.log(e.data())
        })
     }

     const userDoc = doc(db, "users", "AIGESzUiEZZFKyV6PkKd");

async function deleteData() {
  try {
    await deleteDoc(userDoc);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

     const userDocRef = doc(db, "users", "AIGESzUiEZZFKyV6PkKd"); // Get a reference to the specific document

async function updateData() {
  try {
    await updateDoc(userDocRef, {
      name: "Ada Lovelace", // Update the 'name' field
       // Update a nested field using dot notation
    });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}
  const saveData = async () => {
    try {
      let userObj = {
        name,
        email,
        password
      };

      //   auto generate ID

        const saveData = await addDoc(collection(db, "users"), userObj);

    //   const id = Math.round(Math.random() * 106544667567674);

    //   const saveData = await setDoc(doc(db, "users", id.toString()), userObj);

      console.log("save data successfully..", saveData);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>DatabaseScreen</h1>
      <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='enter name'/>
        <br />
        <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter email'/>
        <br />
        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='enter passwprd'/>
        <br />

      <button onClick={saveData}>Add Data</button>
       <br />

      <button onClick={updateData}>Update Data</button>
       <br />

      <button onClick={deleteData}>delete Data</button>
      
    </div>
  );
};

export default DatabaseScreen;

// addDoc

// getDoc

// getDocs

// updateDoc

// deleteDoc