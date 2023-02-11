import React from 'react'
import "./button.css"

const Button = ({handleOperation}) => {

  return (
    <div className='box2'>
      <button onClick={()=>{handleOperation("+")}}>+</button>
      <button onClick={()=>{handleOperation("-")}}>-</button>
      <button onClick={()=>{handleOperation("*")}}>*</button>
      <button onClick={()=>{handleOperation("/")}}>/</button>
    </div>
  )
}

export default Button
