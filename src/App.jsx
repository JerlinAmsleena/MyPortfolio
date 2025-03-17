import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio/Portfolio'
import CustomCursor from './Cursor/CustomCursor'

function App() {

  return (
    <>
    <CustomCursor/>
    {/* <p>Hi...</p> */}
    <Portfolio/>
    </>
  )
}

export default App
