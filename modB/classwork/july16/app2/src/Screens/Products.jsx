import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Products = () => {
    const params=useParams();

    const navigate=useNavigate();
  return (
    <div>
      <h1>product screeen</h1>
      <p>{`search this ${params.id}`}</p>
      <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default Products
