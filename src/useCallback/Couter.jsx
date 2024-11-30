import { useState,useCallback,memo } from "react"

function Couter() {
  const [count,setCount] = useState(9);
  const  handleIncrement = useCallback(function(){
    setCount(count=>count+1)
  },[]);
  const handleDecrement = useCallback(function(){
    setCount(count=>count-1)
  },[])
  return (
    <div>
        <h1>{count}</h1>
        <Button handleIncrement={handleIncrement}  handleDecrement={handleDecrement}></Button>
    </div>
  )
}

const Button = memo(({handleIncrement,handleDecrement})=>{
    return <>
       <button onClick={handleIncrement} style={{margin:"40px"}}>Increment</button><br /><br /><br /><br />
       <button onClick={handleDecrement} style={{margin:"20px"}}>Decrement</button>
    </>   
});
export default Couter