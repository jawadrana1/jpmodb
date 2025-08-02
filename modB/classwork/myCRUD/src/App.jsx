import React from 'react'

import { Route, Routes } from "react-router-dom";                         
import Home from "./Screens/Home";
import ReadUser from "./Screens/ReadUser";
import CreateUser from "./Screens/CreateUser";
import EditUser from "./Screens/EditUser";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <Routes >
    
    <Route path="/" element={<Home />}/>   
    <Route path="/readUser/:id" element={<ReadUser />} />
    <Route path="/createUser" element={<CreateUser />} />
    <Route path="/editUser/:id" element={<EditUser />} />


    <Route path="/*" element={<NotFound />}/>    
                 

    

    </Routes>
  )
}

export default App;


