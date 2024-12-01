import React, { useContext } from 'react'
import { useState } from 'react'

import CountContext from './ContextApi';

function ContextApp() {
  const [count,setCount] = useState(9);

  return <>
     <CountContext.Provider value={{count,setCount}}>
         <Count></Count>
     </CountContext.Provider>
  </>
}

function Count(){
  return<>
    <div>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
    </div>
  </>
} 
function CountRenderer(){
  const {count} = useContext(CountContext);
  return <h1>Count : {count}</h1>
}
function Buttons(){
  const {count,setCount} = useContext(CountContext);
   return <>
       <button onClick={()=>{
        setCount(count+1)
       }}>INCREMENT</button>
       <button onClick={()=>{
        setCount(count-1)
       }}>DECREMENT</button>
       </>
}
export default ContextApp