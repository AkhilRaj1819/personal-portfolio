import { useState } from 'react'
import './App.css'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
