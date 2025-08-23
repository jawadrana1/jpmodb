// src/components/common/Input.jsx
import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
        boxSizing: "border-box",
        marginBottom: "10px",
      }}
    />
  );
};

export default Input;
