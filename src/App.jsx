import React from 'react'
import RouterApp from './Routers/RouterApp'
import HookApp from './Hooks/HookApp'
import ContextApp from "./ContextAPI/ContextApp"
function App() {
  return (
    <>
      <RouterApp></RouterApp>
      <HookApp></HookApp>
      <ContextApp></ContextApp>
    </>
  )
}

export default App