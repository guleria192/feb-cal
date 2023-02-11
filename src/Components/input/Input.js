import React from 'react'
import "./input.css"

const Input = ({state1, state2, setState1, setState2}) => {

    

  return (
    <div className='box1'>
      < input text="text" name = "num1" placeholder='Num 1' value={state1} onChange = {(e)=>{setState1(e.target.value)}}/>
      < input text="text" name = "num2" placeholder='Num 2' value={state2} onChange = {(e)=>{setState2(e.target.value)}}/>
    </div>
  )
}

export default Input







// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/guleria192/feb-cal.git
// git push -u origin main