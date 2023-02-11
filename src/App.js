import React,{useState} from 'react';
import Input from './Components/input/Input';
import "./app.css"
import Button from './Components/button/Button';

function App() {
    const[state1,setState1] = useState("")
    const[state2,setState2] = useState("")
    const[ans , setAns] = useState("")
    // const[success , setSuccess] = useState("")



    
    const handleOperation = (action) =>{
    
    
    
      
      
      
      
      if(action === "+") setAns(parseInt(state1) + parseInt(state2))
      else if(action === "-") setAns(parseInt(state1) - parseInt(state2))
      else if(action === "*") setAns(parseInt(state1) * parseInt(state2))
      else if(action === "/") setAns(parseInt(state1) / parseInt(state2))
      
    
    } 
    
    
    return (
      
    <div className="App">
      <h1>React Calculator</h1>
    <Input state1={state1} state2={state2} setState1={setState1} setState2={setState2}/>
    <Button handleOperation={handleOperation}/>
    <br/>
    <div>Resut :{ans}</div>
    <br/>
    {/* <div>{success?  "success : Your result is shown above!" : "Error : Num cannot be empty" }</div> */}
    </div>
  );
}

export default App;
