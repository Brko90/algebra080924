import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConditionalRendering from './component/ConditionalRendering'

function App() {

  return (
    <>
    <ConditionalRendering number={2} />
    </>
  )
}

export default App
