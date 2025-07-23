import React from "react"; 
import { data } from "../data";
import Cards from "../Components/Card/Cards";   
  
const Products = () => {

  return (
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"center",gap:20}}> 
      {
        data.map((e,i)=>{
          
         return <Cards key={e.id} 
         productId={e.id} 
         imgSrc={e.image} 
         title={e.title} 
         desc={e.description}/>
          
        })
      }
    </div> 
  );
};

export default Products;