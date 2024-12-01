import { Suspense, useState } from 'react'
import  { lazy } from 'react'
import React  from 'react';
import { BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom'
const Landing   = lazy(()=>import('./components/Landing'))
const DashBoard = lazy(()=> import('./components/DashBoard'))
function App() {
  return <>
     <BrowserRouter>
       <AppRoute/>
        <Routes>
            <Route path='/' element={<Suspense fallback={"loading.."}><Landing/></Suspense>}></Route>
            <Route path='/dashboard' element={<Suspense fallback={"loading..."}><DashBoard/></Suspense>}></Route>
        </Routes>
     </BrowserRouter>
  </>
}

function AppRoute (){
  const navigate = useNavigate();
  return <div>
  <h1 style={{backgroundColor:"red",color:"white"}}>THIS IS TOP BAR</h1>
  <button onClick={()=>{
    navigate("/");
  }}>Landing Page</button>
  <button onClick={()=>{
     navigate("/dashboard");
  }}>DashBoard Page</button>
</div>
}

export default App
