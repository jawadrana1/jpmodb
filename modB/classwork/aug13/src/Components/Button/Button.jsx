import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter,subCounter } from '../../store/slices/counterSlice';

const Button = () => {
    const dispatch=useDispatch();

    const increment=()=>{
        dispatch(addCounter())
    }
    
    const decrement=()=>{
        dispatch(subCounter())
    }

  return (
    <div>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}

export default Button
