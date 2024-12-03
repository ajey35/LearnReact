import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import countAtom from "../store/atoms/count";
import { useMemo } from "react";

function ContextApp() {
  console.log("Count Re- Rendered");
  
  return <>
     <Count></Count>
  </>
}

function Count(){
  return<>
    <div>
      <RecoilRoot>
         <CountRenderer></CountRenderer>
          <Buttons></Buttons>
      </RecoilRoot>
    </div>
  </>
} 
function CountRenderer(){
  const count =  useRecoilValue(countAtom);
  return <div>
     <h1>Count :  {count}</h1>
     <EvenDisplay/>
  </div>
}
function EvenDisplay(){
  const count = useRecoilValue(countAtom);
  const Even = useMemo(()=>{
    return count&1;
  },[count]);
  return <>
     {Even?"":"It is Even"}
  </>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
   return <>
       <button onClick={()=>{
        setCount(count=>count+1)
       }}>INCREMENT</button>
       <button onClick={()=>{
        setCount(count=>count-1)
       }}>DECREMENT</button>
       </>
}
export default ContextApp