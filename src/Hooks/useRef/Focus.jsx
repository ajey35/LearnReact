import { useEffect ,useRef} from "react";

function Focus() {
    const inputRef = useRef();
    function handleFocus(){
        inputRef.current.focus(); 
    }
    useEffect(()=>{
        handleFocus();
    },[])
   
    return (
     <div>
        <input type="text" ref={inputRef}/>
        <button  onClick={handleFocus}>Focus</button>
     </div> 
  )
}

export default Focus;