import { memo, useCallback, useState } from "react"

function Alert() {
  const [input,setInput] = useState("");
  const showAlert = useCallback(()=>{
    alert(input);
 },[input])
  return (
    <div>
        <input type="text" placeholder="Enter Anything!!!" onChange={(e)=>setInput(e.target.value)}/>
        <Child showAlert={showAlert}></Child>
    </div>
  )
}

const Child = memo(({showAlert})=>{
    return <>
      <button onClick={showAlert}>show Alert</button>
    </>
})

export default Alert