import React from "react";
import ReactDom from "react-dom/client";

const divElement = document.getElementById("root");

// let ImgFunc = () => {
//   return <img src={tiger} />;
// };

// let Listed = () => {
  
// // array
// // obj
// // var let
// // if else

//   return (
//     <ul>
//       <li>Apple</li>
//       <li>Orange</li>
//       <li>Mango</li>
//       <li>Banana</li>
//       <li>grapes</li>
//     </ul>
//   );
// };



ReactDom.createRoot(divElement).render(
  <>
  

    <h1
      style={{
        color: "red",
        backgroundColor: "black",
        textTransform: "uppercase",
        fontFamily:"cursive",
        textAlign:"center"
      }}
    >
      Hello React ! This is Jawad Ahmed
    </h1>
  </>
);