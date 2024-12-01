import React, { useRef, useState } from 'react'
function Render() {
   const[rend,setRend] = useState(0);
   const count = useRef(0);
   function Force(){
      setRend(rend+1);
   }
   count.current +=1;
  return (
    <div>
        <h1>Number of Re-Renders! : {count.current}</h1>
        <button onClick={Force}>Force-Render</button>
    </div>
  )
}

export default Render