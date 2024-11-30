import { useMemo, useState } from "react";

const Factorial = () => {
  const [input,setInput] = useState("");
  const fact = useMemo(()=>{
    let tot=1;
    for(let i=1;i<=input;i++) tot*=i;
    return tot;  
  },[input]);
  function handleChange(e){
    setInput(parseInt(e.target.value));
  }
  return (
    <div>
        <input type="number" onChange={handleChange}/>
       {
        input?(<h1>{fact}</h1>):" "
       }
    </div>
  )
}

export default Factorial;