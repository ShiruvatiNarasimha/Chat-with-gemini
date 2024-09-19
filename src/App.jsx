import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main/Main'
import Sidebar from 'src/components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}

export default App
